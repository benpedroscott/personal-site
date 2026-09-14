import React from "react";
import DOMPurify from "dompurify";
import styles from "./BehindTheScenes.module.scss";

const hasHtmlTag = (value) => /<\/?[a-z][\s\S]*>/i.test(value);

const sanitizeHtmlContent = (htmlString) => {
  const sanitized = DOMPurify.sanitize(htmlString, {
    ALLOWED_TAGS: ["img", "a", "p", "br", "strong", "em", "ul", "ol", "li", "blockquote", "span"],
    ALLOWED_ATTR: ["src", "alt", "title", "href", "target", "rel", "class"],
  });

  const template = document.createElement("template");
  template.innerHTML = sanitized;

  template.content.querySelectorAll("img").forEach((imgEl) => {
    imgEl.setAttribute("loading", "lazy");
    imgEl.setAttribute("decoding", "async");
  });

  template.content.querySelectorAll("a").forEach((anchorEl) => {
    if (anchorEl.getAttribute("target") === "_blank") {
      anchorEl.setAttribute("rel", "noreferrer");
    }
  });

  return template.innerHTML;
};

function BehindTheScenes({ entry, onClose }) {
  const btsContent = entry?.bts_content;
  const paragraphs = Array.isArray(btsContent?.text) ? btsContent.text : [];
  const tiktokEmbed = btsContent?.tiktok;
  const shouldRenderTikTok = Boolean(entry?.embed && tiktokEmbed?.video_id);
  const introVideoUrl = btsContent?.intro_vid || null;

  const richParagraphs = React.useMemo(
    () =>
      paragraphs.map((paragraph) => {
        if (paragraph && typeof paragraph === "object" && !Array.isArray(paragraph)) {
          if (paragraph.src) {
            return {
              kind: "image",
              src: paragraph.src,
              caption: paragraph.caption || "",
            };
          }
        }

        const rawValue = String(paragraph ?? "");
        if (!hasHtmlTag(rawValue)) {
          return { kind: "text", value: rawValue };
        }

        return { kind: "html", value: sanitizeHtmlContent(rawValue) };
      }),
    [paragraphs],
  );

  React.useEffect(() => {
    if (!shouldRenderTikTok) return;

    const scriptId = "tiktok-embed-script";
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      if (window.tiktokEmbedLoad) {
        window.tiktokEmbedLoad();
      }
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.tiktokEmbedLoad) {
        window.tiktokEmbedLoad();
      }
    };

    document.body.appendChild(script);
  }, [entry?.id, shouldRenderTikTok]);

  return (
    <section className={styles.root} aria-hidden={!btsContent}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close behind the scenes">
        x
      </button>

      <div className={styles.content}>
        {introVideoUrl ? <video src={introVideoUrl} controls autoPlay loop muted /> : null}
        <p className={styles.kicker}>Behind the scenes</p>
        <h2 className={styles.hed}>{btsContent?.hed || "No behind-the-scenes headline yet"}</h2>
        {/* <p className={styles.dek}>{btsContent?.dek || "No behind-the-scenes dek yet."}</p> */}
        {richParagraphs.map((paragraph, index) =>
          paragraph.kind === "html" ? (
            <div
              key={`bts-paragraph-${index}`}
              className={styles.dekHtml}
              dangerouslySetInnerHTML={{ __html: paragraph.value }}
            ></div>
          ) : paragraph.kind === "image" ? (
            <figure key={`bts-paragraph-${index}`} className={styles.inlineFigure}>
              <img src={paragraph.src} alt={paragraph.caption || "Behind the scenes image"} />
              {paragraph.caption ? <p className={styles.imageCaption}>{paragraph.caption}</p> : null}
            </figure>
          ) : (
            <p key={`bts-paragraph-${index}`} className={styles.dek}>
              {paragraph.value}
            </p>
          ),
        )}
        {shouldRenderTikTok ? (
          <div className={styles.embedWrap}>
            <blockquote
              className="tiktok-embed"
              cite={tiktokEmbed.cite}
              data-video-id={tiktokEmbed.video_id}
              style={{ maxWidth: "605px", minWidth: "325px", paddingw: "0px" }}
            >
              <section>
                <a target="_blank" rel="noreferrer" title={tiktokEmbed.account_title} href={tiktokEmbed.account_href}>
                  {tiktokEmbed.account_title}
                </a>{" "}
                {tiktokEmbed.caption}{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  title={tiktokEmbed.music_title}
                  href={tiktokEmbed.music_href}
                >
                  {tiktokEmbed.music_title}
                </a>
              </section>
            </blockquote>
          </div>
        ) : null}
        <button className={styles.returnButton} onClick={onClose}>
          Return to main view
        </button>
        
         
      </div>
    </section>
  );
}

export default BehindTheScenes;
