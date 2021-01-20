﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="contact.aspx.cs" Inherits="WebUI.contact" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<title>Contact Us</title>
	<link rel="icon" type="image/x-icon" href="./favicon.ico" />
	<link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,700|Open+Sans+Condensed:300,700|Open+Sans:300,400,600,700" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="./assets/css/style.min.css" />
	<!-- Global Site Tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-106659427-1"></script>
	<script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', 'UA-106659427-1');
	</script>
    <!-- Global Site Tag (gtag.js) - Google Analytics -->

    <!-- Google Recaptcha-->
	<script src='https://www.google.com/recaptcha/api.js'></script>
    <!-- Google Recaptcha-->
</head>
<body>
	<div class="rs-header-wrap">
		<div class="rs-header-bg">
			<header class="rs-header rs-row rs-clearfix">
				<div class="rs-header-logo-wrap">
					<a href="./index.html">
						<img class="rs-header-logo" src="./assets/images/rs-logo-header.png" alt="Ringside MD" />
					</a>
				</div><!-- rs-header-logo -->
				<div class="rs-mmenu">
					<a class="rs-mmenu-link" href="#main-nav">Menu</a>
				</div>
				<nav class="rs-header-nav">
					<ul>
						<li>
							<a href="./compAdvantage.html">Competitive Advantage</a>
						</li>
						<li>
							<a href="./services.html">Services</a>
						</li>
						<li>
							<a href="./insight.html">Insight</a>
						</li>
						<li>
							<a href="./physicians.html">Physicians</a>
						</li>
						<li>
							<a href="./careers.html">Careers</a>
						</li>
						<li>
							<a href="./contact.aspx" class="rs-header-nav-link-active">Contact Us</a>
						</li>
					</ul>
				</nav><!-- rs-header-nav -->
			</header><!-- rs-header -->
		</div><!-- rs-header-border -->
	</div><!-- rs-header-wrap -->

	<section class="rs-contact-bg-top rs-bg-img">
		<div class="rs-bg-corner rs-row animated fadeInUp">
			<h1 class="rs-contact-bg-top-title">Contact Us</h1>
		</div>
	</section><!-- rs-contact-bg-top -->

	<section class="rs-contact-form">
		<div class="rs-row">
			<h4 class="rs-contact-form-title">Ringside MD is here to provide you with more information, answer any
				questions you may have, and demonstrate how on-site healthcare can be your competitive advantage.</h4>
			<p>Ringside MD will provide a free consultation.</p>
			<p>Give us a call: <span>905.819.7774</span> or send us a message:</p>

			<form id="contactUs" name="contactUs" runat="server" onsubmit="return get_action();" method="post">
				<div class="form-group rs-contact-form-input">
					<label class="rs-contact-form-label">Name<span>*</span></label>
					<input type="text" class="form-control input-lg" name="name" maxlength="100" placeholder="Name">
				</div>
				<div class="form-group rs-contact-form-input">
					<label class="rs-contact-form-label">Phone</label>
					<input type="text" class="form-control input-lg" name="phone" maxlength="100" placeholder="Phone">
				</div>
				<div class="form-group rs-contact-form-input">
					<label class="rs-contact-form-label">E-mail<span>*</span></label>
					<input type="email" class="form-control input-lg" name="email" maxlength="100" placeholder="Email">
				</div>
				<div class="form-group rs-contact-form-input">
					<label class="rs-contact-form-label">Country</label>
					<input type="text" class="form-control input-lg" name="country" maxlength="100" placeholder="Country">
				</div>
				<div class="form-group rs-contact-form-textarea">
					<label class="rs-contact-form-label">Note<span>*</span></label>
					<textarea class="form-control input-lg" rows="7" name="message" maxlength="1000" placeholder="Message"></textarea>
				</div>
				<div class="form-group">
					<div class="g-recaptcha" data-sitekey="6LdUJjEUAAAAANTqdFiUCbEg5QJTWXPpRPEt-1rp"></div>
					<span id="captcha" style="margin-left:0px;color:#f05323;font-size:81.25%;"></span>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-lg btn-submit rs-ca-btn">Submit</button>
				</div>
			</form>

		</div>
	</section><!-- rs-contact-form -->

	<div class="rs-footer-wrap">
		<footer class="rs-footer rs-row rs-clearfix">
			<div class="rs-footer-logo-wrap">
				<a href="./index.html">
					<img class="rs-footer-logo" src="./assets/images/rs-logo-footer.png" alt="Ringside MD" />
				</a>
			</div><!-- rs-footer-logo -->
			<nav class="rs-footer-nav">
				<ul class="rs-footer-nav-top">
					<li>
						<a href="./compAdvantage.html">Competitive Advantage</a>
					</li>
					<li>
						<a href="./services.html">Services</a>
					</li>
					<li>
						<a href="./insight.html">Insight</a>
					</li>
					<li>
						<a href="./physicians.html">Physicians</a>
					</li>
					<li>
						<a href="./careers.html">Careers</a>
					</li>
					<li>
						<a href="./contact.aspx">Contact Us</a>
					</li>
				</ul><!-- rs-footer-nav-top -->
				<ul class="rs-footer-nav-bottom">
					<li>
						<a href="./privacy-policy.html">Privacy Policy</a>
					</li>
					<li>
						<a href="./terms.html">Terms of Use</a>
					</li>
					<li>
						<a href="./sitemap.html">Site Map</a>
					</li>
				</ul>
				<div class="rs-footer-copy">Copyright &copy; 2017 Ringside MD. All rights reserved</div>
			</nav><!-- rs-footer-nav -->
		</footer><!-- rs-footer -->
	</div><!-- rs-footer-wrap -->

    <script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
    <script type='text/javascript' src='./assets/js/jquery.validate.min.js'></script>
    <script type='text/javascript' src='./assets/js/script.min.js'></script>
    <script type="text/javascript">
        function get_action() {
            var v = grecaptcha.getResponse();

            if (v.length == 0) {
                document.getElementById('captcha').innerHTML = "Click here to verify you're not a robot!";
                return false;
            } else {
                return true;
            }
        }

        validateForm();

        function validateForm() {
            var contactUs = $('#contactUs');

            contactUs.validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 2
                    }
                },
                messages: {
                    name : "This field is required.",
                    email: "This field is required.",
                    message: "This field is required."
                }
            });
        }
        </script>
</body>
</html>
