import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaRegCopy } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const mediaShare = [
	{ name: "X", icon: FaXTwitter, func: null },
	{ name: "Facebook", icon: FaFacebookF, func: null },
	{ name: "Linkedin", icon: FaLinkedinIn, func: null },
	{ name: "Reddit", icon: FaRedditAlien, func: null },
	{ name: "Copy", icon: FaRegCopy, func: copyLink },
]

async function copyLink() {
	try {
    	await navigator.clipboard.writeText(window.location.href);
	} catch (err) {
		console.error("Error: ", err);
	}
}