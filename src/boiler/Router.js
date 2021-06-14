// Third party
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// Custom Components
import Boiler from './Boiler.js'
import ScrollToTop from "./ScrollToTop"

// Check if route is admin page
const Router = () => {
	return(
		<BrowserRouter>
			<ScrollToTop>
				<Boiler />
			</ScrollToTop>
		</BrowserRouter>
	)
}

export default Router