class MobileNav {
	constructor(burgerSelector, mobileNavSelector, mobileNavLink) {
		this.burgerSelector = burgerSelector
		this.mobileNavSelector = mobileNavSelector
		this.mobileNavLink = mobileNavLink

		this.init()
	}

	init() {
		const burgerEl = document.querySelector(this.burgerSelector)
		const mobileNavEl = document.querySelector(this.mobileNavSelector)
		const mobileNavLinkEls = document.querySelectorAll(this.mobileNavLink)

		burgerEl.addEventListener('click', () => {
			if (!burgerEl.classList.contains('active')) {
				this.setOpen(burgerEl, mobileNavEl)
			} else {
				this.setClose(burgerEl, mobileNavEl)
			}
		})

		mobileNavLinkEls.forEach(mobileNavLinkEl => {
			mobileNavLinkEl.addEventListener('click', () => {
				this.setClose(burgerEl, mobileNavEl)
			})
		})


	}

	setOpen(burgerEl, mobileNavEl) {
		burgerEl.classList.add('active')
		mobileNavEl.classList.add('active')
	}

	setClose(burgerEl, mobileNavEl) {
		burgerEl.classList.remove('active')
		mobileNavEl.classList.remove('active')
	}
}

const mobileNav = new MobileNav('.burger', '.mobile-nav', '.mobile-menu__link')