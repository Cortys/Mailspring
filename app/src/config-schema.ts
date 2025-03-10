import { localized } from './intl';

export default {
  core: {
    type: 'object',
    properties: {
      intl: {
        type: 'object',
        properties: {
          language: {
            type: 'string',
            title: 'Interface Langauge',
            default: '',
          },
        },
      },
      sync: {
        type: 'object',
        properties: {
          verboseUntil: {
            type: 'number',
            default: 0,
            title: localized('Enable verbose IMAP / SMTP logging'),
          },
        },
      },
      workspace: {
        type: 'object',
        properties: {
          mode: {
            type: 'string',
            default: 'list',
            enum: ['split', 'list'],
          },
          systemTray: {
            type: 'boolean',
            default: true,
            title: localized('Show icon in menu bar / system tray'),
            platforms: ['darwin', 'linux'],
          },
          showImportant: {
            type: 'boolean',
            default: true,
            title: localized('Show Gmail-style important markers (Gmail Only)'),
          },
          showUnreadForAllCategories: {
            type: 'boolean',
            default: false,
            title: localized('Show unread counts for all folders / labels'),
          },
          use24HourClock: {
            type: 'boolean',
            default: false,
            title: localized('Use 24-hour clock'),
          },
          interfaceZoom: {
            title: localized('Override standard interface scaling'),
            type: 'number',
            default: 1,
            advanced: true,
          },
        },
      },
      disabledPackages: {
        type: 'array',
        default: [],
        items: {
          type: 'string',
        },
      },
      themes: {
        type: 'array',
        default: ['ui-light'],
        items: {
          type: 'string',
        },
      },
      keymapTemplate: {
        type: 'string',
        default: 'Gmail',
      },
      attachments: {
        type: 'object',
        properties: {
          openFolderAfterDownload: {
            type: 'boolean',
            default: false,
            title: localized('Open containing folder after downloading attachment'),
          },
          displayFilePreview: {
            type: 'boolean',
            default: true,
            title: localized('Display thumbnail previews for attachments when available.'),
          },
        },
      },
      reading: {
        type: 'object',
        properties: {
          markAsReadDelay: {
            type: 'integer',
            default: 500,
            enum: [0, 500, 2000, -1],
            enumLabels: [
              localized('Instantly'),
              localized('After %@ Seconds', '0.5'),
              localized('After %@ Seconds', '2'),
              localized('Manually'),
            ],
            title: localized('When reading messages, mark as read'),
          },
          autoloadImages: {
            type: 'boolean',
            default: true,
            title: localized('Automatically load images in viewed messages'),
          },
          detailedHeaders: {
            type: 'boolean',
            default: false,
            title: localized('Show full message headers by default'),
          },
          detailedNames: {
            type: 'boolean',
            default: false,
            title: localized('Show first and last names of all recipients'),
          },
          restrictMaxWidth: {
            type: 'boolean',
            default: false,
            title: localized('Restrict width of messages to maximize readability'),
          },
          backspaceDelete: {
            type: 'boolean',
            default: false,
            title: localized('Move to trash (not archive) on swipe / backspace'),
          },
          descendingOrderMessageList: {
            type: 'boolean',
            default: false,
            title: localized('Display conversations in descending chronological order'),
          },
        },
      },
      composing: {
        type: 'object',
        properties: {
          spellcheck: {
            type: 'boolean',
            default: true,
            title: localized('Check messages for spelling'),
          },
          spellcheckDefaultLanguage: {
            type: 'string',
            default: '',
            enum: [
              '',
              'bg',
              'br',
              'ca',
              'cs',
              'da',
              'de',
              'de-at',
              'de-ch',
              'el',
              'en-au',
              'en-ca',
              'en-gb',
              'en-us',
              'en-za',
              'eo',
              'es',
              'et',
              'eu',
              'fo',
              'fr',
              'fur',
              'fy',
              'ga',
              'gd',
              'gl',
              'he',
              'hr',
              'hu',
              'is',
              'it',
              'ko',
              'la',
              'lb',
              'lt',
              'ltg',
              'lv',
              'mk',
              'mn',
              'nb',
              'ne',
              'nl',
              'nn',
              'pl',
              'pt',
              'pt-br',
              'ro',
              'ru',
              'rw',
              'sk',
              'sl',
              'sr',
              'sv',
              'tr',
              'uk',
              'vi',
            ],
            enumLabels: [
              '(System Default)',
              'Bulgarian',
              'Breton',
              'Catalan',
              'Czech',
              'Danish',
              'German',
              'German (Austria)',
              'German (Switzerland)',
              'Modern Greek',
              'English (Australia)',
              'English (Canada)',
              'English (United Kingdom)',
              'English (United States)',
              'English (South Africa)',
              'Esperanto',
              'Spanish',
              'Estonian',
              'Basque',
              'Faroese',
              'French',
              'Friulian',
              'Western Frisian',
              'Irish',
              'Gaelic',
              'Galician',
              'Hebrew',
              'Croatian',
              'Hungarian',
              'Icelandic',
              'Italian',
              'Korean',
              'Latin',
              'Luxembourgish',
              'Lithuanian',
              'Latgalian',
              'Latvian',
              'Macedonian',
              'Mongolian',
              'Norwegian Bokmål',
              'Nepali',
              'Dutch',
              'Norwegian Nynorsk',
              'Polish',
              'Portuguese',
              'Portuguese (Brazil)',
              'Romanian',
              'Russian',
              'Kinyarwanda',
              'Slovak',
              'Slovenian',
              'Serbian',
              'Swedish',
              'Turkish',
              'Ukrainian',
              'Vietnamese',
            ],
            title: localized('Spellcheck language'),
            note: localized(
              'If you write a draft in another language, Mailspring will auto-detect it and use the correct spelling dictionary after a few sentences.'
            ),
          },
        },
      },
      sending: {
        type: 'object',
        properties: {
          sounds: {
            type: 'boolean',
            default: true,
            title: localized('Message Sent Sound'),
          },
          defaultReplyType: {
            type: 'string',
            default: 'reply-all',
            enum: ['reply', 'reply-all'],
            enumLabels: [localized('Reply'), localized('Reply All')],
            title: localized('Default reply behavior'),
          },
          undoSend: {
            type: 'number',
            default: 5000,
            enum: [5000, 15000, 30000, 60000, 0],
            enumLabels: [
              `5 ${localized('seconds')}`,
              `15 ${localized('seconds')}`,
              `30 ${localized('seconds')}`,
              `60 ${localized('seconds')}`,
              localized('Disable'),
            ],
            title: localized('After sending, enable undo for'),
          },
        },
      },
      notifications: {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean',
            default: true,
            title: localized('Show notifications for new unread messages'),
          },
          enabledForRepeatedTrackingEvents: {
            type: 'boolean',
            default: true,
            title: localized('Show notifications for repeated opens / clicks'),
          },
          sounds: {
            type: 'boolean',
            default: true,
            title: localized('Play sound when receiving new mail'),
          },
          unsnoozeToTop: {
            type: 'boolean',
            default: true,
            title: localized('Resurface messages to the top of the inbox when unsnoozing'),
          },
          countBadge: {
            type: 'string',
            default: 'unread',
            enum: ['hide', 'unread', 'total'],
            enumLabels: [
              localized('Hide Badge'),
              localized('Show Unread Count'),
              localized('Show Total Count'),
            ],
            title: localized('Show badge on the app icon'),
          },
        },
      },
    },
  },
};
