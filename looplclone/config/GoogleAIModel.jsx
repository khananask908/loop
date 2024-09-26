/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {
            text: 'reference to :\n{\n   "time": 1550476186479,\n   "blocks": [\n      {\n         "id": "oUq2g_tl8y",\n         "type": "header",\n         "data": {\n            "text": "Editor.js",\n            "level": 2\n         }\n      },\n      {\n         "id": "zbGZFPM-iI",\n         "type": "paragraph",\n         "data": {\n            "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."\n         }\n      },\n      {\n         "id": "qYIGsjS5rt",\n         "type": "header",\n         "data": {\n            "text": "Key features",\n            "level": 3\n         }\n      },\n      {\n         "id": "XV87kJS_H1",\n         "type": "list",\n         "data": {\n            "style": "unordered",\n            "items": [\n               "It is a block-styled editor",\n               "It returns clean data output in JSON",\n               "Designed to be extendable and pluggable with a simple API"\n            ]\n         }\n      },\n      {\n         "id": "AOulAjL8XM",\n         "type": "header",\n         "data": {\n            "text": "What does it mean «block-styled editor»",\n            "level": 3\n         }\n      },\n      {\n         "id": "cyZjplMOZ0",\n         "type": "paragraph",\n         "data": {\n            "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\\"cdx-marker\\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core."\n         }\n      }\n   ],\n   "version": "2.8.1"\n}\nGenerate Template  for editor.js in JSON for Grocery Todo list ',
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "time": 1688486641962,\n  "blocks": [\n    {\n      "id": "t28wY24x",\n      "type": "header",\n      "data": {\n        "text": "Grocery Todo List",\n        "level": 1\n      }\n    },\n    {\n      "id": "9F1H2H3Y",\n      "type": "paragraph",\n      "data": {\n        "text": "Keep track of your grocery items and mark them off as you buy them."\n      }\n    },\n    {\n      "id": "6jM7A3O8",\n      "type": "list",\n      "data": {\n        "style": "unordered",\n        "items": [\n          "Milk",\n          "Eggs",\n          "Bread",\n          "Cheese",\n          "Apples"\n        ]\n      }\n    },\n    {\n      "id": "O12K954B",\n      "type": "paragraph",\n      "data": {\n        "text": "You can add more items to the list using the \'+\' button below."\n      }\n    }\n  ],\n  "version": "2.8.1"\n}\n```\n\n**Explanation:**\n\n* **`time`:** Timestamp representing the time of creation/modification.\n* **`blocks`:** An array containing the content of the editor, organized into blocks.\n* **`version`:** Indicates the version of the Editor.js library used.\n\n**Block Types:**\n\n* **`header`:** A heading block, used for titles and subtitles.\n* **`paragraph`:** A simple text block, used for regular paragraphs.\n* **`list`:** A block for creating lists.\n* **`image`:** (not included) A block for inserting images. You\'d need to use a custom plugin for image functionality.\n\n**Block Data:**\n\n* **`id`:** A unique identifier for the block.\n* **`type`:** The type of block, e.g., "header", "paragraph", "list".\n* **`data`:** An object containing data specific to the block type.\n\n**Grocery List Example:**\n\n* The `header` block is used for the main title "Grocery Todo List."\n* The first `paragraph` block provides a description.\n* The `list` block represents the actual grocery items. \n* The second `paragraph` explains how to add more items.\n\n**Customization:**\n\nYou can add, remove, or modify blocks and their data to create your desired grocery list template.\n\n**Using Plugins:**\n\nEditor.js is designed to be extendable with plugins. You can use or create custom plugins to:\n\n* **Add more block types:**  For example, a "checkbox" block to mark items as purchased.\n* **Enhance existing blocks:** You could customize the "list" block to have strikethrough functionality for purchased items.\n* **Provide additional features:** You can add features like saving the list, syncing with a database, or integration with other services. \n',
          },
        ],
      },
    ],
  });

 // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
 // console.log(result.response.text());
