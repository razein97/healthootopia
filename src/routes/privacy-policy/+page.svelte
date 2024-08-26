<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/custom_components/footer.svelte';
	import Header from '$lib/custom_components/header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{'Privacy Policy'}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" content={'privacy policy'} />
	<meta name="description" content={'Healthootopia Privacy Policy'} />
	<meta property="og:title" content={'Healthootopia-Privacy Policy'} />

	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div>
	<Header />

	<div class="mx-auto my-0 p-4 lg:w-full xl:w-[1080px] 2xl:w-[1080px]">
		<div class="privacy-policy grid gap-4 p-6">
			<h1 class="text-center font-serif text-3xl md:text-5xl">Privacy Policy</h1>
			<h2 class=" font-serif text-2xl md:text-4xl">Who we are</h2>
			<p class=" text-justify font-sans text-base font-light md:text-lg">
				Healthootopia (“us”, “we”, or “our”) operates the https://healthootopia.com website
				(hereinafter referred to as the “Healthootopia”). <br /> This page informs you of our
				policies regarding the collection, use, and disclosure of personal data when you use
				Healthootopia and the choices you have associated with that data. <br />
				We use your data to provide and improve the Service. By using Healthootopia, you agree to the
				collection and use of information in accordance with this policy. Unless otherwise defined in
				this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms
				and Conditions, accessible from https://healthootopia.com
			</p>
			<h2 class=" font-serif text-2xl md:text-4xl">
				What personal data we collect and why we collect it
			</h2>

			<p class=" text-justify font-sans text-base font-light md:text-lg">
				We collect several different types of information for various purposes to provide and
				improve our Service to you.
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Types of Data Collected</h3>
			<h4 class="font-serif text-lg md:text-2xl">Personal Data</h4>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				While using our Service, we may ask you to provide us with certain personally identifiable
				information that can be used to contact or identify you (“Personal Data”). Personally
				identifiable information may include, but is not limited to:
			</p>
			<ul class="list-disc pl-10">
				<li>Email address</li>
				<li>First name and last name</li>
				<li>Phone number</li>
				<li>Address, State, Province, ZIP/Postal code, City</li>
				<li>Cookies and Usage Data</li>
			</ul>
			<h4 class="font-serif text-lg md:text-2xl">Usage Data</h4>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				We may also collect information on how the Service is accessed and used (“Usage Data”). This
				Usage Data may include information such as your computer’s Internet Protocol address (e.g.
				IP address), browser type, browser version, the pages of our Service that you visit, the
				time and date of your visit, the time spent on those pages, unique device identifiers and
				other diagnostic data.
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Comments</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				When visitors leave comments on the site we collect the data shown in the comments form, and
				also the visitor’s IP address and browser user agent string to help spam detection. <br />
				An anonymized string created from your email address (also called a hash) may be provided to
				the Gravatar service to see if you are using it. The Gravatar service privacy policy is available
				here: https://automattic.com/privacy/. After approval of your comment, your profile picture is
				visible to the public in the context of your comment.
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Media</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				If you upload images to the website, you should avoid uploading images with embedded
				location data (EXIF GPS) included. Visitors to the website can download and extract any
				location data from images on the website.
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Cookies</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				If you leave a comment on our site you may opt-in to saving your name, email address and
				website in cookies. These are for your convenience so that you do not have to fill in your
				details again when you leave another comment. These cookies will last for one year. <br />
				If you visit our login page, we will set a temporary cookie to determine if your browser accepts
				cookies. This cookie contains no personal data and is discarded when you close your browser.
				<br />
				When you log in, we will also set up several cookies to save your login information and your
				screen display choices. Login cookies last for two days, and screen options cookies last for
				a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of
				your account, the login cookies will be removed.{' '}
				<br />
				If you edit or publish an article, an additional cookie will be saved in your browser. This cookie
				includes no personal data and simply indicates the post ID of the article you just edited. It
				expires after 1 day.
			</p>

			<h3 class="font-serif text-xl md:text-3xl">Embedded content from other websites</h3>

			<p class="text-justify font-sans text-base font-light md:text-lg">
				Articles on this site may include embedded content (e.g. videos, images, articles, etc.).
				Embedded content from other websites behaves in the exact same way as if the visitor has
				visited the other website. <br />
				These websites may collect data about you, use cookies, embed additional third-party tracking,
				and monitor your interaction with that embedded content, including tracking your interaction
				with the embedded content if you have an account and are logged in to that website.
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Analytics</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				We may use third-party Service Providers to monitor and analyze the use of our Service. We
				may employ third party companies and individuals to facilitate our Service (“Service
				Providers”), to provide the Service on our behalf, to perform Service-related services or to
				assist us in analyzing how Healthootopia is used.{' '}
				<br />
				These third parties have access to your Personal Data only to perform these tasks on our behalf
				and are obligated not to disclose or use it for any other purpose. <br />
				<b>Google Analytics:</b> Google Analytics is a web analytics service offered by Google that tracks
				and reports website traffic. Google uses the data collected to track and monitor the use of our
				Service. This data is shared with other Google services. Google may use the collected data to
				contextualize and personalize the ads of its own advertising network. You can opt-out of having
				made your activity on healthootopia.com available to Google Analytics by installing the Google
				Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
				analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.
				For more information on the privacy practices of Google, please visit the Google Privacy & Terms
				web page: https://policies.google.com/privacy?hl=en
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Social sharing</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				We embed a Facebook widget to allow you to see number of likes/shares/recommends and
				“like/share/recommend” our webpages. This widget may collect your IP address, your web
				browser User Agent, store and retrieve cookies on your browser, embed additional tracking,
				and monitor your interaction with the widget, including correlating your Facebook account
				with whatever action you take within the widget (such as “liking/sharing/recommending” our
				webpage), if you are logged in to Facebook. For more information about how this data may be
				used, please see Facebook’s data privacy policy:
				https://www.facebook.com/about/privacy/update <br />
				We use a Twitter Tweet widget at our website. As a result, our website makes requests to Twitter’s
				servers for you to be able to tweet our webpages using your Twitter account. These requests make
				your IP address visible to Twitter, who may use it in accordance with their data privacy policy:
				https://twitter.com/en/privacy#update <br />
				We use a Linkedin Share widget at our website to allow you to share our webpages on Linkedin.
				These requests may track your IP address in accordance with their data privacy policy: https://www.linkedin.com/legal/privacy-policy
				<br />
				We use Pinterest Save widget at our website to allow you to pin images to Pinterest from our
				webpages. These requests may track your IP address in accordance with their data privacy policy:
				https://policy.pinterest.com/en/privacy-policy <br />
				We use Reddit Badge widget at our website which may log information when you interact with the
				widget. This may include your IP address, user-agent string, browser type, operating system,
				referral URLs, device information (e.g., device IDs), pages visited, links clicked, user interactions
				(e.g., voting data), the requested URL and hardware settings, in accordance with their privacy
				policy: https://www.redditinc.com/policies/privacy-policy
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Who we share your data with</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				If you request a password reset, your IP address will be included in the reset email.
			</p>
			<h4 class="font-serif text-2xl">Legal Requirements</h4>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				Healthootopia may disclose your Personal Data in the good faith belief that such action is
				necessary to:
			</p>
			<ul class="list-disc pl-10">
				<li>To comply with a legal obligation</li>
				<li>To protect and defend the rights or property of Healthootopia</li>
				<li>To prevent or investigate possible wrongdoing in connection with the Service</li>
				<li>To protect the personal safety of users of the Service or the public</li>
				<li>To protect against legal liability</li>
			</ul>
			<h3 class="font-serif text-xl md:text-3xl">How long we retain your data</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				If you leave a comment, the comment and its metadata are retained indefinitely. This is so
				we can recognize and approve any follow-up comments automatically instead of holding them in
				a moderation queue. <br />
				For users that register on our website (if any), we also store the personal information they
				provide in their user profile. All users can see, edit, or delete their personal information
				at any time (except they cannot change their username). Website administrators can also see and
				edit that information.
			</p>
			<h3 class="font-serif text-xl md:text-3xl">What rights you have over your data</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				If you have an account on this site, or have left comments, you can request to receive an
				exported file of the personal data we hold about you, including any data you have provided
				to us. You can also request that we erase any personal data we hold about you. This does not
				include any data we are obliged to keep for administrative, legal, or security purposes.
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Where we send your data</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				Visitor comments may be checked through an automated spam detection service. Your
				information, including Personal Data, may be transferred to — and maintained on — computers
				located outside of your state, province, country or other governmental jurisdiction where
				the data protection laws may differ than those from your jurisdiction. <br />
				If you are located outside India and choose to provide information to us, please note that we
				transfer the data, including Personal Data, to India and process it there. <br />
				Your consent to this Privacy Policy followed by your submission of such information represents
				your agreement to that transfer. <br />
				Healthootopia will take all steps reasonably necessary to ensure that your data is treated securely
				and in accordance with this Privacy Policy and no transfer of your Personal Data will take place
				to an organization or a country unless there are adequate controls in place including the security
				of your data and other personal information.
			</p>

			<h3 class="font-serif text-xl md:text-3xl">Additional information</h3>
			<h4 class="font-serif text-lg md:text-2xl">How we protect your data</h4>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				The security of your data is important to us, but remember that no method of transmission
				over the Internet, or method of electronic storage is 100% secure. While we strive to use
				commercially acceptable means to protect your Personal Data, we cannot guarantee its
				absolute security.
			</p>
			<h4 class="font-serif text-lg md:text-2xl">Links To Other Sites</h4>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				Healthootopia may contain links to other sites that are not operated by us. If you click on
				a third party link, you will be directed to that third party’s site. We strongly advise you
				to review the Privacy Policy of every site you visit. <br />
				We have no control over and assume no responsibility for the content, privacy policies or practices
				of any third party sites or services.
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Children’s Privacy</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				Healthootopia does not address anyone under the age of 18 (“Children”). <br />
				We do not knowingly collect personally identifiable information from anyone under the age of
				18. If you are a parent or guardian and you are aware that your children has provided us with
				Personal Data, please contact us. If we become aware that we have collected Personal Data from
				children without verification of parental consent, we take steps to remove that information from
				our servers.
			</p>
			<h3 class="font-serif text-xl md:text-3xl">Changes To This Privacy Policy</h3>
			<p class="text-justify font-sans text-base font-light md:text-lg">
				We may update our Privacy Policy from time to time. We will notify you of any changes by
				posting the new Privacy Policy on this page.{' '}
				<br />
				We will let you know via email and/or a prominent notice on our Service, prior to the change
				becoming effective and update the “effective date” at the top of this Privacy Policy. <br />
				You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
				Policy are effective when they are posted on this page.
			</p>
		</div>
	</div>
	<Footer />
</div>
