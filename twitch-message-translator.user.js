// ==UserScript==
// @name         Twitch Chat Message Translator
// @author       Masuta
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Translate Twitch / 7TV chat messages (message text only)
// @match        https://www.twitch.tv/*
// @grant        GM_xmlhttpRequest
// @connect      translate.googleapis.com
// @homepage     https://github.com/MasutaK/twitch-chat-translator
// @source       https://github.com/MasutaK/twitch-chat-translator
// @supportURL   https://github.com/MasutaK/twitch-chat-translator/issues
// ==/UserScript==

(function () {
    'use strict';

    let selectedMessage = null;
    let extractedText = "";

    // Available languages
    const LANGUAGES = {
        fr: "Français",
        en: "English",
        ja: "日本語",
        ko: "한국어",
        es: "Español",
        de: "Deutsch",
        pt: "Português",
        ru: "Русский",
        zh: "中文",
        ar: "العربية"
    };

    // UI panel
    const ui = document.createElement("div");
    ui.style.position = "fixed";
    ui.style.bottom = "20px";
    ui.style.right = "20px";
    ui.style.zIndex = "99999";
    ui.style.background = "#18181b";
    ui.style.border = "1px solid #333";
    ui.style.padding = "10px";
    ui.style.borderRadius = "8px";
    ui.style.display = "none";
    ui.style.color = "#fff";
    ui.style.fontSize = "14px";

    const select = document.createElement("select");
    select.style.width = "100%";
    select.style.marginBottom = "8px";

    for (const code in LANGUAGES) {
        const opt = document.createElement("option");
        opt.value = code;
        opt.textContent = LANGUAGES[code];
        select.appendChild(opt);
    }

    const button = document.createElement("button");
    button.textContent = "🌍 Translate";
    button.style.width = "100%";
    button.style.cursor = "pointer";

    ui.appendChild(select);
    ui.appendChild(button);
    document.body.appendChild(ui);

    // Translation function
    function translateText(text, targetLang, callback) {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

        GM_xmlhttpRequest({
            method: "GET",
            url,
            onload: (res) => {
                try {
                    const data = JSON.parse(res.responseText);
                    callback(data[0].map(p => p[0]).join(""));
                } catch {
                    callback("Translation failed");
                }
            }
        });
    }

    // RIGHT CLICK detection (most reliable)
    document.addEventListener("contextmenu", (e) => {
        const body = e.target.closest(".seventv-chat-message-body")
            || e.target.closest('[class*="chat-line"]');

        if (!body) return;

        e.preventDefault();

        // Extract message text
        const tokens = body.querySelectorAll(".text-token");
        extractedText = Array.from(tokens).map(t => t.textContent).join("");

        if (!extractedText.trim()) return;

        selectedMessage = body;

        // Visual feedback
        document.querySelectorAll(".tm-selected").forEach(el => el.classList.remove("tm-selected"));
        body.classList.add("tm-selected");
        body.style.outline = "2px solid #9146FF";

        ui.style.display = "block";
    });

    // Translate button click
    button.addEventListener("click", () => {
        if (!selectedMessage || !extractedText) return;

        translateText(extractedText, select.value, (translated) => {
            let div = selectedMessage.querySelector(".tm-translation");
            if (!div) {
                div = document.createElement("div");
                div.className = "tm-translation";
                div.style.marginTop = "4px";
                div.style.fontSize = "0.85em";
                div.style.opacity = "0.85";
                div.style.color = "#ccc";
                selectedMessage.appendChild(div);
            }
            div.textContent = `🗨️ ${translated}`;
        });
    });

})();
