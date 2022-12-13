const QnA2 = () => {
	return (
		<>
			{/*=================Start Main Body Section==============*/}
			<section id="main-body-section">
				<div className="container-fluid">
					<div className="row">
						{/*Logo Area*/}
						<div className="logo-area col-lg-4 col-12 dis-none">
							<div className="logo">
								<img src="assets/images/logo.svg" alt="logo" />
							</div>
							<div className="user-profile-area">
								<div className="user-profile">
									<img src="assets/images/logo-two.svg" alt="logo" />
								</div>
							</div>
						</div>
						{/*/// End Logo Area*/}
						{/*Upload HairStyle*/}
						<div className="hairstyle-upload-area-start customPadding col-lg-8 col-12">
							{/*Responsive Logo*/}
							<div className="responsive-logo-new">
								<img
									className="maniResponsiveLogo"
									src="assets/images/main-logo.svg"
									alt="logo"
								/>
								<div className="responsiveBodyEffect">
									<img
										src="assets/images/all-effect/body-left-effect.png"
										alt="img"
									/>
								</div>
								<div className="bodyBlueEffect" />
							</div>
							{/*/// End Responsive Logo*/}
							{/*Body Effect*/}
							<div className="body-effect-area dis-none">
								<div className="body-effect-left-up"></div>
								<div className="body-effect-left"></div>
								<div className="body-effect-up">
									<img src="assets/images/up-effect.png" alt="img" />
								</div>
							</div>
							{/*/// End Body Effect*/}
							{/*Hair Analysis Area*/}
							<div className="hair-analysis-main-area">
								<div className="hair-analysis-heading">
									<h4>HAIR ANALYSIS QUIZ</h4>
									<p>
										<span>
											1 / <span style={{ color: '#00C9C9' }}>2</span>
										</span>
									</p>
								</div>
								{/*Showing Bar*/}
								<div className="showing-bar-area">
									<div className="bar-left black-bar" />
									<div className="bar-right" />
								</div>
								{/*/// End Showing Bar*/}
								{/*Select Hair Goals Options*/}
								<div className="select-hair-goals-area">
									{/*Heading*/}
									<div className="hari-golas-heading">
										<h1>Select up to 5 hair goals</h1>
										<p className="notice-text">Please select at least 1 goal</p>
									</div>
									{/*/// End Heading*/}
									{/*Select Option / one*/}
									<div className="hair-select-option">
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												deep condition
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												fix split ends
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												mousturize
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												replenish hair
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												strengthen
											</button>
										</div>
										{/*/// End copy item*/}
									</div>
									{/*/// End Select Option / one*/}
									{/*Select Option / two*/}
									<div className="hair-select-option">
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												rejuvenate
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												color protection
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												lengthen
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												thermal protection
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												volumize
											</button>
										</div>
										{/*/// End copy item*/}
									</div>
									{/*/// End Select Option / two*/}
									{/*Select Option / three*/}
									<div className="hair-select-option">
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												anti-frizz
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												curl definition
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												nourish roots
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												shine
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												soothe scalp
											</button>
										</div>
										{/*/// End copy item*/}
									</div>
									{/*/// End Select Option / three*/}
									{/*Select Option / Four*/}
									<div className="hair-select-option">
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												straighten
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												nourish roots
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												shine
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												soothe scalp
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												straighten
											</button>
										</div>
										{/*/// End copy item*/}
									</div>
									{/*/// End Select Option / Four*/}
									{/*Select Option / Five*/}
									<div className="hair-select-option">
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												oil control
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												reduce brassiness
											</button>
										</div>
										{/*/// End copy item*/}
									</div>
									{/*/// End Select Option / Five*/}
								</div>
								{/*/// End Select Hair Goals Options*/}
								{/*Unwanted Ingredients*/}
								<div className="unwanted-ingredients-area">
									{/*Heading*/}
									<div className="hari-golas-heading">
										<h1>Unwanted Ingredients</h1>
										<p className="notice-text">
											Select up to 3 ingredients that you would like to exclude
											from your product recommendation.
										</p>
									</div>
									{/*/// End Heading*/}
									{/*Select Option Unwanted*/}
									<div className="hair-select-option">
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												Silicons
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												Parabens
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												Sulfates
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="select-item">
											<button type="" name="">
												Fragrance
											</button>
										</div>
										{/*/// End copy item*/}
									</div>
									{/*/// End Select Option Unwanted*/}
								</div>
								{/*/// End Unwanted Ingredients*/}
								{/*What is your favorite Product*/}
								<div className="what-is-your-favorite-section">
									{/*Headng*/}
									<div className="what-is-heading">
										<h1>
											What is your{' '}
											<span style={{ color: '#00C9C9' }}>
												favorite product?
											</span>
										</h1>
										<p>
											This helps us understand how similar items in any brand
											will fit you.
										</p>
									</div>
									{/*/// End Headng*/}
									{/*Search Here*/}
									<div className="search-here-area">
										<form action="">
											<div className="search">
												<input type="search" placeholder="Search for a brand" />
												<img
													className="search-icon"
													src="assets/images/search.svg"
													alt="img"
												/>
											</div>
										</form>
									</div>
									{/*/// End Search Here*/}
									{/*Search Item*/}
									<div className="search-item-here">
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												ADIDAS
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												ASICS
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												BEARPAW
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												COLE HAAN
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												CONVERSE
											</button>
										</div>
										{/*/// End copy item*/}
									</div>
									{/*/// End Search Item*/}
									{/*Search Item*/}
									<div className="search-item-here">
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												NEW BALANCE
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												NIKE
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												TIMBERLAND
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												UGG
											</button>
										</div>
										{/*/// End copy item*/}
										{/*copy item*/}
										<div className="search-item">
											<button type="" name="">
												VANS
											</button>
										</div>
										{/*/// End copy item*/}
									</div>
									{/*/// End Search Item*/}
								</div>
								{/*/// End What is your favorite Product*/}
								{/*Button Area*/}
								<div className="main-button-area">
									<div className="previous-btn">
										<button>
											<i className="bx bx-chevron-left" /> PREVIOUS
										</button>
									</div>
									<div className="next-btn">
										<button>
											<img
												className="orginal"
												src="assets/images/analyze-hover.svg"
												alt="icon"
											/>{' '}
											<img
												className="hover-img"
												src="assets/images/analyze.svg"
												alt="icon"
											/>{' '}
											ANALYZE
										</button>
									</div>
								</div>
								{/*/// End Button Area*/}
							</div>
							{/*/// End Hair Analysis Area*/}
						</div>
						{/*/// End Upload HairStyle*/}
					</div>
				</div>
			</section>
			{/*=================End Main Body Section==============*/}
			{/*====================strart Footer Section====================*/}
			<footer className="main-footer-area">
				<div className="container-fluid">
					<div className="row">
						<div className="copyright-area">
							<img
								className="footer-logo-img"
								src="assets/images/footer-logo.svg"
								alt="logo"
							/>
							<p className="copyright-text">
								Powered by <a href="/">Layla AI</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
			{/*====================End Footer Section====================*/}
		</>
	);
};
export default QnA2;
