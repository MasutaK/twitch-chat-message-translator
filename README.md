# Twitch Chat Message Translator

**Version:** 1.0  
**Author:** Masuta  
**License:** CC BY-NC 4.0  

A Tampermonkey / Greasemonkey userscript for Twitch that allows you to translate **chat messages from Twitch or 7TV** by right-clicking on them. Only the message text is translated, keeping your original chat intact.  

---

## Features

- Translate individual Twitch/7TV chat messages into multiple languages.  
- Right-click on a message to select it for translation.  
- Inline display of the translated text below the original message.  
- Visual feedback when a message is selected (highlighted outline).  
- Supports multiple languages: English, French, Japanese, Korean, Spanish, German.  
- Simple, unobtrusive UI panel fixed at the bottom-right of the screen.  

---

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/) in your browser.
2. Go to the [Raw GitHub URL](https://raw.githubusercontent.com/MasutaK/twitch-chat-message-translator/main/twitch-message-translator.user.js) of the script.
3. Click **Install** when prompted by Tampermonkey.

> Make sure the script is enabled in your Tampermonkey dashboard.

---

## Usage

1. Open **Twitch** and navigate to any channel chat.  
2. **Right-click** on a chat message you want to translate.  
3. The translator panel will appear at the bottom-right of your screen.  
4. Select your target language from the dropdown menu.  
5. Click the **🌍 Translate** button to display the translation below the selected message.  

---

## Supported Languages

| Language      | Code |
|---------------|------|
| English       | en   |
| Français      | fr   |
| Español       | es   |
| Deutsch       | de   |
| Português     | pt   |
| 日本語        | ja   |
| 한국어        | ko   |
| Русский       | ru   |
| 中文        | zh   |
| العربية        | ar   |

---

## Attribution & License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.  

You must:  

- Give credit to the original author: **Masuta**.  
- Not use the script for commercial purposes.  
- Include a link to the license if redistributing.  

[License link](https://creativecommons.org/licenses/by-nc/4.0/)  

---

## Contributing

Feel free to suggest improvements, report bugs, or propose new features.  

**Note:** This script uses the **free Google Translate API endpoint**, which may have usage limits.  
