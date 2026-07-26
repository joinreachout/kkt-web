// LinkedIn posts embedded on /blog (the "From LinkedIn" strip).
//
// To add a post: open it on LinkedIn → ··· (top-right of the post) →
// "Embed this post" → copy the URL inside src="…" of the <iframe> it gives you
// (it looks like https://www.linkedin.com/embed/feed/update/urn:li:share:123…)
// → paste it as a string in the array below. Newest first.
//
// Leave the array empty and the strip renders only the "Follow KKT on LinkedIn"
// call-to-action — no placeholder cards. (A true auto-updating feed would need a
// paid third-party widget or the LinkedIn API + OAuth; this native embed path is
// free and needs no keys.)
export const LINKEDIN_EMBEDS: string[] = [];
