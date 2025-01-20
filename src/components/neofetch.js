const WEATHER_CODES = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

// prettier-ignore
const LANGUAGE_NAMES = {
  "aa": "Afar",                                                "aa-DJ": "Afar (Djibouti)",                                       "aa-ER": "Afar (Eritrea)",                                                                                                                                            
  "aa-ET": "Afar (Ethiopia)",                                  "af": "Afrikaans",                                                "af-NA": "Afrikaans (Namibia)",                                                                                                                                            
  "af-ZA": "Afrikaans (South Africa)",                         "agq": "Aghem",                                                   "agq-CM": "Aghem (Cameroon)",                                                                                                                                            
  "ak": "Akan",                                                "ak-GH": "Akan (Ghana)",                                          "am": "Amharic",                                                                                                                                            
  "am-ET": "Amharic (Ethiopia)",                               "ar": "Arabic",                                                   "ar-001": "Arabic (World)",                                                                                                                                            
  "ar-AE": "Arabic (U.A.E.)",                                  "ar-BH": "Arabic (Bahrain)",                                      "ar-DJ": "Arabic (Djibouti)",                                                                                                                                            
  "ar-DZ": "Arabic (Algeria)",                                 "ar-EG": "Arabic (Egypt)",                                        "ar-ER": "Arabic (Eritrea)",                                                                                                                                            
  "ar-IL": "Arabic (Israel)",                                  "ar-IQ": "Arabic (Iraq)",                                         "ar-JO": "Arabic (Jordan)",                                                                                                                                            
  "ar-KM": "Arabic (Comoros)",                                 "ar-KW": "Arabic (Kuwait)",                                       "ar-LB": "Arabic (Lebanon)",                                                                                                                                            
  "ar-LY": "Arabic (Libya)",                                   "ar-MA": "Arabic (Morocco)",                                      "ar-MR": "Arabic (Mauritania)",                                                                                                                                            
  "ar-OM": "Arabic (Oman)",                                    "ar-PS": "Arabic (Palestinian Authority)",                        "ar-QA": "Arabic (Qatar)",                                                                                                                                            
  "ar-SA": "Arabic (Saudi Arabia)",                            "ar-SD": "Arabic (Sudan)",                                        "ar-SO": "Arabic (Somalia)",                                                                                                                                            
  "ar-SS": "Arabic (South Sudan)",                             "ar-SY": "Arabic (Syria)",                                        "ar-TD": "Arabic (Chad)",                                                                                                                                            
  "ar-TN": "Arabic (Tunisia)",                                 "ar-YE": "Arabic (Yemen)",                                        "arn": "Mapudungun",                                                                                                                                            
  "arn-CL": "Mapudungun (Chile)",                              "as": "Assamese",                                                 "as-IN": "Assamese (India)",                                                                                                                                            
  "asa": "Asu",                                                "asa-TZ": "Asu (Tanzania)",                                       "ast": "Asturian",                                                                                                                                            
  "ast-ES": "Asturian (Spain)",                                "az": "Azerbaijani",                                              "az-Cyrl": "Azerbaijani (Cyrillic)",                                                                                                                                            
  "az-Cyrl-AZ": "Azerbaijani (Cyrillic, Azerbaijan)",          "az-Latn": "Azerbaijani (Latin)",                                 "az-Latn-AZ": "Azerbaijani (Latin, Azerbaijan)",                                                                                                                                            
  "ba": "Bashkir",                                             "ba-RU": "Bashkir (Russia)",                                      "bas": "Basaa",                                                                                                                                            
  "bas-CM": "Basaa (Cameroon)",                                "be": "Belarusian",                                               "be-BY": "Belarusian (Belarus)",                                                                                                                                            
  "bem": "Bemba",                                              "bem-ZM": "Bemba (Zambia)",                                       "bez": "Bena",                                                                                                                                            
  "bez-TZ": "Bena (Tanzania)",                                 "bg": "Bulgarian",                                                "bg-BG": "Bulgarian (Bulgaria)",                                                                                                                                            
  "bin": "Edo",                                                "bin-NG": "Edo (Nigeria)",                                        "bm": "Bambara",                                                                                                                                            
  "bm-Latn": "Bambara (Latin)",                                "bm-Latn-ML": "Bambara (Latin, Mali)",                            "bn": "Bangla",                                                                                                                                            
  "bn-BD": "Bangla (Bangladesh)",                              "bn-IN": "Bangla (India)",                                        "bo": "Tibetan",                                                                                                                                            
  "bo-CN": "Tibetan (PRC)",                                    "bo-IN": "Tibetan (India)",                                       "br": "Breton",                                                                                                                                            
  "br-FR": "Breton (France)",                                  "brx": "Bodo",                                                    "brx-IN": "Bodo (India)",                                                                                                                                            
  "bs": "Bosnian",                                             "bs-Cyrl": "Bosnian (Cyrillic)",                                  "bs-Cyrl-BA": "Bosnian (Cyrillic, Bosnia and Herzegovina)",                                                                                                                                            
  "bs-Latn": "Bosnian (Latin)",                                "bs-Latn-BA": "Bosnian (Latin, Bosnia and Herzegovina)",          "byn": "Blin",                                                                                                                                            
  "byn-ER": "Blin (Eritrea)",                                  "ca": "Catalan",                                                  "ca-AD": "Catalan (Andorra)",                                                                                                                                            
  "ca-ES": "Catalan (Catalan)",                                "ca-ES-valencia": "Valencian (Spain)",                            "ca-FR": "Catalan (France)",                                                                                                                                            
  "ca-IT": "Catalan (Italy)",                                  "ce": "Chechen",                                                  "ce-RU": "Chechen (Russia)",                                                                                                                                            
  "cgg": "Chiga",                                              "cgg-UG": "Chiga (Uganda)",                                       "chr": "Cherokee",                                                                                                                                            
  "chr-Cher": "Cherokee (Cherokee)",                           "chr-Cher-US": "Cherokee (Cherokee)",                             "co": "Corsican",                                                                                                                                            
  "co-FR": "Corsican (France)",                                "cs": "Czech",                                                    "cs-CZ": "Czech (Czechia / Czech Republic)",                                                                                                                                            
  "cu": "Church Slavic",                                       "cu-RU": "Church Slavic (Russia)",                                "cy": "Welsh",                                                                                                                                            
  "cy-GB": "Welsh (United Kingdom)",                           "da": "Danish",                                                   "da-DK": "Danish (Denmark)",                                                                                                                                            
  "da-GL": "Danish (Greenland)",                               "dav": "Taita",                                                   "dav-KE": "Taita (Kenya)",                                                                                                                                            
  "de": "German",                                              "de-AT": "German (Austria)",                                      "de-BE": "German (Belgium)",                                                                                                                                            
  "de-CH": "German (Switzerland)",                             "de-DE": "German (Germany)",                                      "de-IT": "German (Italy)",                                                                                                                                            
  "de-LI": "German (Liechtenstein)",                           "de-LU": "German (Luxembourg)",                                   "dje": "Zarma",                                                                                                                                            
  "dje-NE": "Zarma (Niger)",                                   "dsb": "Lower Sorbian",                                           "dsb-DE": "Lower Sorbian (Germany)",                                                                                                                                            
  "dua": "Duala",                                              "dua-CM": "Duala (Cameroon)",                                     "dv": "Divehi",                                                                                                                                            
  "dv-MV": "Divehi (Maldives)",                                "dyo": "Jola-Fonyi",                                              "dyo-SN": "Jola-Fonyi (Senegal)",                                                                                                                                            
  "dz": "Dzongkha",                                            "dz-BT": "Dzongkha (Bhutan)",                                     "ebu": "Embu",                                                                                                                                            
  "ebu-KE": "Embu (Kenya)",                                    "ee": "Ewe",                                                      "ee-GH": "Ewe (Ghana)",                                                                                                                                            
  "ee-TG": "Ewe (Togo)",                                       "el": "Greek",                                                    "el-CY": "Greek (Cyprus)",                                                                                                                                            
  "el-GR": "Greek (Greece)",                                   "en": "English",                                                  "en-001": "English (World)",                                                                                                                                            
  "en-029": "English (Caribbean)",                             "en-150": "English (Europe)",                                     "en-AG": "English (Antigua and Barbuda)",                                                                                                                                            
  "en-AI": "English (Anguilla)",                               "en-AS": "English (American Samoa)",                              "en-AT": "English (Austria)",                                                                                                                                            
  "en-AU": "English (Australia)",                              "en-BB": "English (Barbados)",                                    "en-BE": "English (Belgium)",                                                                                                                                            
  "en-BI": "English (Burundi)",                                "en-BM": "English (Bermuda)",                                     "en-BS": "English (Bahamas)",                                                                                                                                            
  "en-BW": "English (Botswana)",                               "en-BZ": "English (Belize)",                                      "en-CA": "English (Canada)",                                                                                                                                            
  "en-CC": "English (Cocos [Keeling] Islands)",                "en-CH": "English (Switzerland)",                                 "en-CK": "English (Cook Islands)",                                                                                                                                            
  "en-CM": "English (Cameroon)",                               "en-CX": "English (Christmas Island)",                            "en-CY": "English (Cyprus)",                                                                                                                                            
  "en-DE": "English (Germany)",                                "en-DK": "English (Denmark)",                                     "en-DM": "English (Dominica)",                                                                                                                                            
  "en-ER": "English (Eritrea)",                                "en-FI": "English (Finland)",                                     "en-FJ": "English (Fiji)",                                                                                                                                            
  "en-FK": "English (Falkland Islands)",                       "en-FM": "English (Micronesia)",                                  "en-GB": "English (United Kingdom)",                                                                                                                                            
  "en-GD": "English (Grenada)",                                "en-GG": "English (Guernsey)",                                    "en-GH": "English (Ghana)",                                                                                                                                            
  "en-GI": "English (Gibraltar)",                              "en-GM": "English (Gambia)",                                      "en-GU": "English (Guam)",                                                                                                                                            
  "en-GY": "English (Guyana)",                                 "en-HK": "English (Hong Kong SAR)",                               "en-ID": "English (Indonesia)",                                                                                                                                            
  "en-IE": "English (Ireland)",                                "en-IL": "English (Israel)",                                      "en-IM": "English (Isle of Man)",                                                                                                                                            
  "en-IN": "English (India)",                                  "en-IO": "English (British Indian Ocean Territory)",              "en-JE": "English (Jersey)",                                                                                                                                            
  "en-JM": "English (Jamaica)",                                "en-KE": "English (Kenya)",                                       "en-KI": "English (Kiribati)",                                                                                                                                            
  "en-KN": "English (Saint Kitts and Nevis)",                  "en-KY": "English (Cayman Islands)",                              "en-LC": "English (Saint Lucia)",                                                                                                                                            
  "en-LR": "English (Liberia)",                                "en-LS": "English (Lesotho)",                                     "en-MG": "English (Madagascar)",                                                                                                                                            
  "en-MH": "English (Marshall Islands)",                       "en-MO": "English (Macao SAR)",                                   "en-MP": "English (Northern Mariana Islands)",                                                                                                                                            
  "en-MS": "English (Montserrat)",                             "en-MT": "English (Malta)",                                       "en-MU": "English (Mauritius)",                                                                                                                                            
  "en-MW": "English (Malawi)",                                 "en-MY": "English (Malaysia)",                                    "en-NA": "English (Namibia)",                                                                                                                                            
  "en-NF": "English (Norfolk Island)",                         "en-NG": "English (Nigeria)",                                     "en-NL": "English (Netherlands)",                                                                                                                                            
  "en-NR": "English (Nauru)",                                  "en-NU": "English (Niue)",                                        "en-NZ": "English (New Zealand)",                                                                                                                                            
  "en-PG": "English (Papua New Guinea)",                       "en-PH": "English (Philippines)",                                 "en-PK": "English (Pakistan)",                                                                                                                                            
  "en-PN": "English (Pitcairn Islands)",                       "en-PR": "English (Puerto Rico)",                                 "en-PW": "English (Palau)",                                                                                                                                            
  "en-RW": "English (Rwanda)",                                 "en-SB": "English (Solomon Islands)",                             "en-SC": "English (Seychelles)",                                                                                                                                            
  "en-SD": "English (Sudan)",                                  "en-SE": "English (Sweden)",                                      "en-SG": "English (Singapore)",                                                                                                                                            
  "en-SH": "English (St Helena, Ascension, Tristan da Cunha)", "en-SI": "English (Slovenia)",                                    "en-SL": "English (Sierra Leone)",                                                                                                                                            
  "en-SS": "English (South Sudan)",                            "en-SX": "English (Sint Maarten)",                                "en-SZ": "English (Swaziland)",                                                                                                                                            
  "en-TC": "English (Turks and Caicos Islands)",               "en-TK": "English (Tokelau)",                                     "en-TO": "English (Tonga)",                                                                                                                                            
  "en-TT": "English (Trinidad and Tobago)",                    "en-TV": "English (Tuvalu)",                                      "en-TZ": "English (Tanzania)",                                                                                                                                            
  "en-UG": "English (Uganda)",                                 "en-UM": "English (US Minor Outlying Islands)",                   "en-US": "English (United States)",                                                                                                                                            
  "en-VC": "English (Saint Vincent and the Grenadines)",       "en-VG": "English (British Virgin Islands)",                      "en-VI": "English (US Virgin Islands)",                                                                                                                                            
  "en-VU": "English (Vanuatu)",                                "en-WS": "English (Samoa)",                                       "en-ZA": "English (South Africa)",                                                                                                                                            
  "en-ZM": "English (Zambia)",                                 "en-ZW": "English (Zimbabwe)",                                    "eo": "Esperanto",                                                                                                                                            
  "eo-001": "Esperanto (World)",                               "es": "Spanish",                                                  "es-419": "Spanish (Latin America)",                                                                                                                                            
  "es-AR": "Spanish (Argentina)",                              "es-BO": "Spanish (Bolivia)",                                     "es-BR": "Spanish (Brazil)",                                                                                                                                            
  "es-BZ": "Spanish (Belize)",                                 "es-CL": "Spanish (Chile)",                                       "es-CO": "Spanish (Colombia)",                                                                                                                                            
  "es-CR": "Spanish (Costa Rica)",                             "es-CU": "Spanish (Cuba)",                                        "es-DO": "Spanish (Dominican Republic)",                                                                                                                                            
  "es-EC": "Spanish (Ecuador)",                                "es-ES": "Spanish (Spain)",                                       "es-GQ": "Spanish (Equatorial Guinea)",                                                                                                                                            
  "es-GT": "Spanish (Guatemala)",                              "es-HN": "Spanish (Honduras)",                                    "es-MX": "Spanish (Mexico)",                                                                                                                                            
  "es-NI": "Spanish (Nicaragua)",                              "es-PA": "Spanish (Panama)",                                      "es-PE": "Spanish (Peru)",                                                                                                                                            
  "es-PH": "Spanish (Philippines)",                            "es-PR": "Spanish (Puerto Rico)",                                 "es-PY": "Spanish (Paraguay)",                                                                                                                                            
  "es-SV": "Spanish (El Salvador)",                            "es-US": "Spanish (United States)",                               "es-UY": "Spanish (Uruguay)",                                                                                                                                            
  "es-VE": "Spanish (Venezuela)",                              "et": "Estonian",                                                 "et-EE": "Estonian (Estonia)",                                                                                                                                            
  "eu": "Basque",                                              "eu-ES": "Basque (Basque)",                                       "ewo": "Ewondo",                                                                                                                                            
  "ewo-CM": "Ewondo (Cameroon)",                               "fa": "Persian",                                                  "fa-IR": "Persian (Iran)",                                                                                                                                            
  "ff": "Fulah",                                               "ff-CM": "Fulah (Cameroon)",                                      "ff-GN": "Fulah (Guinea)",                                                                                                                                            
  "ff-Latn": "Fulah (Latin)",                                  "ff-Latn-SN": "Fulah (Latin, Senegal)",                           "ff-MR": "Fulah (Mauritania)",                                                                                                                                            
  "ff-NG": "Fulah (Nigeria)",                                  "fi": "Finnish",                                                  "fi-FI": "Finnish (Finland)",                                                                                                                                            
  "fil": "Filipino",                                           "fil-PH": "Filipino (Philippines)",                               "fo": "Faroese",                                                                                                                                            
  "fo-DK": "Faroese (Denmark)",                                "fo-FO": "Faroese (Faroe Islands)",                               "fr": "French",                                                                                                                                            
  "fr-029": "French (Caribbean)",                              "fr-BE": "French (Belgium)",                                      "fr-BF": "French (Burkina Faso)",                                                                                                                                            
  "fr-BI": "French (Burundi)",                                 "fr-BJ": "French (Benin)",                                        "fr-BL": "French (Saint Barthélemy)",                                                                                                                                            
  "fr-CA": "French (Canada)",                                  "fr-CD": "French (Congo DRC)",                                    "fr-CF": "French (Central African Republic)",                                                                                                                                            
  "fr-CG": "French (Congo)",                                   "fr-CH": "French (Switzerland)",                                  "fr-CI": "French (Côte d’Ivoire)",                                                                                                                                            
  "fr-CM": "French (Cameroon)",                                "fr-DJ": "French (Djibouti)",                                     "fr-DZ": "French (Algeria)",                                                                                                                                            
  "fr-FR": "French (France)",                                  "fr-GA": "French (Gabon)",                                        "fr-GF": "French (French Guiana)",                                                                                                                                            
  "fr-GN": "French (Guinea)",                                  "fr-GP": "French (Guadeloupe)",                                   "fr-GQ": "French (Equatorial Guinea)",                                                                                                                                            
  "fr-HT": "French (Haiti)",                                   "fr-KM": "French (Comoros)",                                      "fr-LU": "French (Luxembourg)",                                                                                                                                            
  "fr-MA": "French (Morocco)",                                 "fr-MC": "French (Monaco)",                                       "fr-MF": "French (Saint Martin)",                                                                                                                                            
  "fr-MG": "French (Madagascar)",                              "fr-ML": "French (Mali)",                                         "fr-MQ": "French (Martinique)",                                                                                                                                            
  "fr-MR": "French (Mauritania)",                              "fr-MU": "French (Mauritius)",                                    "fr-NC": "French (New Caledonia)",                                                                                                                                            
  "fr-NE": "French (Niger)",                                   "fr-PF": "French (French Polynesia)",                             "fr-PM": "French (Saint Pierre and Miquelon)",                                                                                                                                            
  "fr-RE": "French (Reunion)",                                 "fr-RW": "French (Rwanda)",                                       "fr-SC": "French (Seychelles)",                                                                                                                                            
  "fr-SN": "French (Senegal)",                                 "fr-SY": "French (Syria)",                                        "fr-TD": "French (Chad)",                                                                                                                                            
  "fr-TG": "French (Togo)",                                    "fr-TN": "French (Tunisia)",                                      "fr-VU": "French (Vanuatu)",                                                                                                                                            
  "fr-WF": "French (Wallis and Futuna)",                       "fr-YT": "French (Mayotte)",                                      "fur": "Friulian",                                                                                                                                            
  "fur-IT": "Friulian (Italy)",                                "fy": "Frisian",                                                  "fy-NL": "Frisian (Netherlands)",                                                                                                                                            
  "ga": "Irish",                                               "ga-IE": "Irish (Ireland)",                                       "gd": "Scottish Gaelic",                                                                                                                                            
  "gd-GB": "Scottish Gaelic (United Kingdom)",                 "gl": "Galician",                                                 "gl-ES": "Galician (Galician)",                                                                                                                                            
  "gn": "Guarani",                                             "gn-PY": "Guarani (Paraguay)",                                    "gsw": "Alsatian",                                                                                                                                            
  "gsw-CH": "Alsatian (Switzerland)",                          "gsw-FR": "Alsatian (France)",                                    "gsw-LI": "Alsatian (Liechtenstein)",                                                                                                                                            
  "gu": "Gujarati",                                            "gu-IN": "Gujarati (India)",                                      "guz": "Gusii",                                                                                                                                            
  "guz-KE": "Gusii (Kenya)",                                   "gv": "Manx",                                                     "gv-IM": "Manx (Isle of Man)",                                                                                                                                            
  "ha": "Hausa",                                               "ha-Latn": "Hausa (Latin)",                                       "ha-Latn-GH": "Hausa (Latin, Ghana)",                                                                                                                                            
  "ha-Latn-NE": "Hausa (Latin, Niger)",                        "ha-Latn-NG": "Hausa (Latin, Nigeria)",                           "haw": "Hawaiian",                                                                                                                                            
  "haw-US": "Hawaiian (United States)",                        "he": "Hebrew",                                                   "he-IL": "Hebrew (Israel)",                                                                                                                                            
  "hi": "Hindi",                                               "hi-IN": "Hindi (India)",                                         "hr": "Croatian",                                                                                                                                            
  "hr-BA": "Croatian (Latin, Bosnia and Herzegovina)",         "hr-HR": "Croatian (Croatia)",                                    "hsb": "Upper Sorbian",                                                                                                                                            
  "hsb-DE": "Upper Sorbian (Germany)",                         "hu": "Hungarian",                                                "hu-HU": "Hungarian (Hungary)",                                                                                                                                            
  "hy": "Armenian",                                            "hy-AM": "Armenian (Armenia)",                                    "ia": "Interlingua",                                                                                                                                            
  "ia-001": "Interlingua (World)",                             "ia-FR": "Interlingua (France)",                                  "ibb": "Ibibio",                                                                                                                                            
  "ibb-NG": "Ibibio (Nigeria)",                                "id": "Indonesian",                                               "id-ID": "Indonesian (Indonesia)",                                                                                                                                            
  "ig": "Igbo",                                                "ig-NG": "Igbo (Nigeria)",                                        "ii": "Yi",                                                                                                                                            
  "ii-CN": "Yi (PRC)",                                         "is": "Icelandic",                                                "is-IS": "Icelandic (Iceland)",                                                                                                                                            
  "it": "Italian",                                             "it-CH": "Italian (Switzerland)",                                 "it-IT": "Italian (Italy)",                                                                                                                                            
  "it-SM": "Italian (San Marino)",                             "it-VA": "Italian (Vatican City)",                                "iu": "Inuktitut",                                                                                                                                            
  "iu-Cans": "Inuktitut (Syllabics)",                          "iu-Cans-CA": "Inuktitut (Syllabics, Canada)",                    "iu-Latn": "Inuktitut (Latin)",                                                                                                                                            
  "iu-Latn-CA": "Inuktitut (Latin, Canada)",                   "ja": "Japanese",                                                 "ja-JP": "Japanese (Japan)",                                                                                                                                            
  "jgo": "Ngomba",                                             "jgo-CM": "Ngomba (Cameroon)",                                    "jmc": "Machame",                                                                                                                                            
  "jmc-TZ": "Machame (Tanzania)",                              "jv": "Javanese",                                                 "jv-Java": "Javanese (Javanese)",                                                                                                                                            
  "jv-Java-ID": "Javanese (Javanese, Indonesia)",              "jv-Latn": "Javanese",                                            "jv-Latn-ID": "Javanese (Indonesia)",                                                                                                                                            
  "ka": "Georgian",                                            "ka-GE": "Georgian (Georgia)",                                    "kab": "Kabyle",                                                                                                                                            
  "kab-DZ": "Kabyle (Algeria)",                                "kam": "Kamba",                                                   "kam-KE": "Kamba (Kenya)",                                                                                                                                            
  "kde": "Makonde",                                            "kde-TZ": "Makonde (Tanzania)",                                   "kea": "Kabuverdianu",                                                                                                                                            
  "kea-CV": "Kabuverdianu (Cabo Verde)",                       "khq": "Koyra Chiini",                                            "khq-ML": "Koyra Chiini (Mali)",                                                                                                                                            
  "ki": "Kikuyu",                                              "ki-KE": "Kikuyu (Kenya)",                                        "kk": "Kazakh",                                                                                                                                            
  "kk-KZ": "Kazakh (Kazakhstan)",                              "kkj": "Kako",                                                    "kkj-CM": "Kako (Cameroon)",                                                                                                                                            
  "kl": "Greenlandic",                                         "kl-GL": "Greenlandic (Greenland)",                               "kln": "Kalenjin",                                                                                                                                            
  "kln-KE": "Kalenjin (Kenya)",                                "km": "Khmer",                                                    "km-KH": "Khmer (Cambodia)",                                                                                                                                            
  "kn": "Kannada",                                             "kn-IN": "Kannada (India)",                                       "ko": "Korean",                                                                                                                                            
  "ko-KP": "Korean (North Korea)",                             "ko-KR": "Korean (Korea)",                                        "kok": "Konkani",                                                                                                                                            
  "kok-IN": "Konkani (India)",                                 "kr": "Kanuri",                                                   "kr-NG": "Kanuri (Nigeria)",                                                                                                                                            
  "ks": "Kashmiri",                                            "ks-Arab": "Kashmiri (Perso-Arabic)",                             "ks-Arab-IN": "Kashmiri (Perso-Arabic)",                                                                                                                                            
  "ks-Deva": "Kashmiri (Devanagari)",                          "ks-Deva-IN": "Kashmiri (Devanagari, India)",                     "ksb": "Shambala",                                                                                                                                            
  "ksb-TZ": "Shambala (Tanzania)",                             "ksf": "Bafia",                                                   "ksf-CM": "Bafia (Cameroon)",                                                                                                                                            
  "ksh": "Colognian",                                          "ksh-DE": "Ripuarian (Germany)",                                  "ku": "Central Kurdish",                                                                                                                                            
  "ku-Arab": "Central Kurdish (Arabic)",                       "ku-Arab-IQ": "Central Kurdish (Iraq)",                           "ku-Arab-IR": "Kurdish (Perso-Arabic, Iran)",                                                                                                                                            
  "kw": "Cornish",                                             "kw-GB": "Cornish (United Kingdom)",                              "ky": "Kyrgyz",                                                                                                                                            
  "ky-KG": "Kyrgyz (Kyrgyzstan)",                              "la": "Latin",                                                    "la-001": "Latin (World)",                                                                                                                                            
  "lag": "Langi",                                              "lag-TZ": "Langi (Tanzania)",                                     "lb": "Luxembourgish",                                                                                                                                            
  "lb-LU": "Luxembourgish (Luxembourg)",                       "lg": "Ganda",                                                    "lg-UG": "Ganda (Uganda)",                                                                                                                                            
  "lkt": "Lakota",                                             "lkt-US": "Lakota (United States)",                               "ln": "Lingala",                                                                                                                                            
  "ln-AO": "Lingala (Angola)",                                 "ln-CD": "Lingala (Congo DRC)",                                   "ln-CF": "Lingala (Central African Republic)",                                                                                                                                            
  "ln-CG": "Lingala (Congo)",                                  "lo": "Lao",                                                      "lo-LA": "Lao (Lao P.D.R.)",                                                                                                                                            
  "lrc": "Northern Luri",                                      "lrc-IQ": "Northern Luri (Iraq)",                                 "lrc-IR": "Northern Luri (Iran)",                                                                                                                                            
  "lt": "Lithuanian",                                          "lt-LT": "Lithuanian (Lithuania)",                                "lu": "Luba-Katanga",                                                                                                                                            
  "lu-CD": "Luba-Katanga (Congo DRC)",                         "luo": "Luo",                                                     "luo-KE": "Luo (Kenya)",                                                                                                                                            
  "luy": "Luyia",                                              "luy-KE": "Luyia (Kenya)",                                        "lv": "Latvian",                                                                                                                                            
  "lv-LV": "Latvian (Latvia)",                                 "mas": "Masai",                                                   "mas-KE": "Masai (Kenya)",                                                                                                                                            
  "mas-TZ": "Masai (Tanzania)",                                "mer": "Meru",                                                    "mer-KE": "Meru (Kenya)",                                                                                                                                            
  "mfe": "Morisyen",                                           "mfe-MU": "Morisyen (Mauritius)",                                 "mg": "Malagasy",                                                                                                                                            
  "mg-MG": "Malagasy (Madagascar)",                            "mgh": "Makhuwa-Meetto",                                          "mgh-MZ": "Makhuwa-Meetto (Mozambique)",                                                                                                                                            
  "mgo": "Meta'",                                              "mgo-CM": "Meta' (Cameroon)",                                     "mi": "Maori",                                                                                                                                            
  "mi-NZ": "Maori (New Zealand)",                              "mk": "Macedonian (FYROM)",                                       "mk-MK": "Macedonian (Former Yugoslav Republic of Macedonia)",                                                                                                                                            
  "ml": "Malayalam",                                           "ml-IN": "Malayalam (India)",                                     "mn": "Mongolian",                                                                                                                                            
  "mn-Cyrl": "Mongolian (Cyrillic)",                           "mn-MN": "Mongolian (Cyrillic, Mongolia)",                        "mn-Mong": "Mongolian (Traditional Mongolian)",                                                                                                                                            
  "mn-Mong-CN": "Mongolian (Traditional Mongolian, PRC)",      "mn-Mong-MN": "Mongolian (Traditional Mongolian, Mongolia)",      "mni": "Manipuri",                                                                                                                                            
  "mni-IN": "Manipuri (India)",                                "moh": "Mohawk",                                                  "moh-CA": "Mohawk (Mohawk)",                                                                                                                                            
  "mr": "Marathi",                                             "mr-IN": "Marathi (India)",                                       "ms": "Malay",                                                                                                                                            
  "ms-BN": "Malay (Brunei Darussalam)",                        "ms-MY": "Malay (Malaysia)",                                      "ms-SG": "Malay (Latin, Singapore)",                                                                                                                                            
  "mt": "Maltese",                                             "mt-MT": "Maltese (Malta)",                                       "mua": "Mundang",                                                                                                                                            
  "mua-CM": "Mundang (Cameroon)",                              "my": "Burmese",                                                  "my-MM": "Burmese (Myanmar)",                                                                                                                                            
  "mzn": "Mazanderani",                                        "mzn-IR": "Mazanderani (Iran)",                                   "naq": "Nama",                                                                                                                                            
  "naq-NA": "Nama (Namibia)",                                  "nb": "Norwegian (Bokmål)",                                       "nb-NO": "Norwegian, Bokmål (Norway)",                                                                                                                                            
  "nb-SJ": "Norwegian, Bokmål (Svalbard and Jan Mayen)",       "nd": "North Ndebele",                                            "nd-ZW": "North Ndebele (Zimbabwe)",                                                                                                                                            
  "nds": "Low German",                                         "nds-DE": "Low German (Germany)",                                 "nds-NL": "Low German (Netherlands)",                                                                                                                                            
  "ne": "Nepali",                                              "ne-IN": "Nepali (India)",                                        "ne-NP": "Nepali (Nepal)",                                                                                                                                            
  "nl": "Dutch",                                               "nl-AW": "Dutch (Aruba)",                                         "nl-BE": "Dutch (Belgium)",                                                                                                                                            
  "nl-BQ": "Dutch (Bonaire, Sint Eustatius and Saba)",         "nl-CW": "Dutch (Curaçao)",                                       "nl-NL": "Dutch (Netherlands)",                                                                                                                                            
  "nl-SR": "Dutch (Suriname)",                                 "nl-SX": "Dutch (Sint Maarten)",                                  "nmg": "Kwasio",                                                                                                                                            
  "nmg-CM": "Kwasio (Cameroon)",                               "nn": "Norwegian (Nynorsk)",                                      "nn-NO": "Norwegian, Nynorsk (Norway)",                                                                                                                                            
  "nnh": "Ngiemboon",                                          "nnh-CM": "Ngiemboon (Cameroon)",                                 "no": "Norwegian",                                                                                                                                            
  "nqo": "N'ko",                                               "nqo-GN": "N'ko (Guinea)",                                        "nr": "South Ndebele",                                                                                                                                            
  "nr-ZA": "South Ndebele (South Africa)",                     "nso": "Sesotho sa Leboa",                                        "nso-ZA": "Sesotho sa Leboa (South Africa)",                                                                                                                                            
  "nus": "Nuer",                                               "nus-SS": "Nuer (South Sudan)",                                   "nyn": "Nyankole",                                                                                                                                            
  "nyn-UG": "Nyankole (Uganda)",                               "oc": "Occitan",                                                  "oc-FR": "Occitan (France)",                                                                                                                                            
  "om": "Oromo",                                               "om-ET": "Oromo (Ethiopia)",                                      "om-KE": "Oromo (Kenya)",                                                                                                                                            
  "or": "Odia",                                                "or-IN": "Odia (India)",                                          "os": "Ossetic",                                                                                                                                            
  "os-GE": "Ossetian (Cyrillic, Georgia)",                     "os-RU": "Ossetian (Cyrillic, Russia)",                           "pa": "Punjabi",                                                                                                                                            
  "pa-Arab": "Punjabi (Arabic)",                               "pa-Arab-PK": "Punjabi (Islamic Republic of Pakistan)",           "pa-IN": "Punjabi (India)",                                                                                                                                            
  "pap": "Papiamento",                                         "pap-029": "Papiamento (Caribbean)",                              "pl": "Polish",                                                                                                                                            
  "pl-PL": "Polish (Poland)",                                  "prg": "Prussian",                                                "prg-001": "Prussian (World)",                                                                                                                                            
  "prs": "Dari",                                               "prs-AF": "Dari (Afghanistan)",                                   "ps": "Pashto",                                                                                                                                            
  "ps-AF": "Pashto (Afghanistan)",                             "pt": "Portuguese",                                               "pt-AO": "Portuguese (Angola)",                                                                                                                                            
  "pt-BR": "Portuguese (Brazil)",                              "pt-CH": "Portuguese (Switzerland)",                              "pt-CV": "Portuguese (Cabo Verde)",                                                                                                                                            
  "pt-GQ": "Portuguese (Equatorial Guinea)",                   "pt-GW": "Portuguese (Guinea-Bissau)",                            "pt-LU": "Portuguese (Luxembourg)",                                                                                                                                            
  "pt-MO": "Portuguese (Macao SAR)",                           "pt-MZ": "Portuguese (Mozambique)",                               "pt-PT": "Portuguese (Portugal)",                                                                                                                                            
  "pt-ST": "Portuguese (São Tomé and Príncipe)",               "pt-TL": "Portuguese (Timor-Leste)",                              "quc": "K'iche'",                                                                                                                                            
  "quc-Latn": "K'iche'",                                       "quc-Latn-GT": "K'iche' (Guatemala)",                             "quz": "Quechua",                                                                                                                                            
  "quz-BO": "Quechua (Bolivia)",                               "quz-EC": "Quechua (Ecuador)",                                    "quz-PE": "Quechua (Peru)",                                                                                                                                            
  "rm": "Romansh",                                             "rm-CH": "Romansh (Switzerland)",                                 "rn": "Rundi",                                                                                                                                            
  "rn-BI": "Rundi (Burundi)",                                  "ro": "Romanian",                                                 "ro-MD": "Romanian (Moldova)",                                                                                                                                            
  "ro-RO": "Romanian (Romania)",                               "rof": "Rombo",                                                   "rof-TZ": "Rombo (Tanzania)",                                                                                                                                            
  "ru": "Russian",                                             "ru-BY": "Russian (Belarus)",                                     "ru-KG": "Russian (Kyrgyzstan)",                                                                                                                                            
  "ru-KZ": "Russian (Kazakhstan)",                             "ru-MD": "Russian (Moldova)",                                     "ru-RU": "Russian (Russia)",                                                                                                                                            
  "ru-UA": "Russian (Ukraine)",                                "rw": "Kinyarwanda",                                              "rw-RW": "Kinyarwanda (Rwanda)",                                                                                                                                            
  "rwk": "Rwa",                                                "rwk-TZ": "Rwa (Tanzania)",                                       "sa": "Sanskrit",                                                                                                                                            
  "sa-IN": "Sanskrit (India)",                                 "sah": "Sakha",                                                   "sah-RU": "Sakha (Russia)",                                                                                                                                            
  "saq": "Samburu",                                            "saq-KE": "Samburu (Kenya)",                                      "sbp": "Sangu",                                                                                                                                            
  "sbp-TZ": "Sangu (Tanzania)",                                "sd": "Sindhi",                                                   "sd-Arab": "Sindhi (Arabic)",                                                                                                                                            
  "sd-Arab-PK": "Sindhi (Islamic Republic of Pakistan)",       "sd-Deva": "Sindhi (Devanagari)",                                 "sd-Deva-IN": "Sindhi (Devanagari, India)",                                                                                                                                            
  "se": "Sami (Northern)",                                     "se-FI": "Sami, Northern (Finland)",                              "se-NO": "Sami, Northern (Norway)",                                                                                                                                            
  "se-SE": "Sami, Northern (Sweden)",                          "seh": "Sena",                                                    "seh-MZ": "Sena (Mozambique)",                                                                                                                                            
  "ses": "Koyraboro Senni",                                    "ses-ML": "Koyraboro Senni (Mali)",                               "sg": "Sango",                                                                                                                                            
  "sg-CF": "Sango (Central African Republic)",                 "shi": "Tachelhit",                                               "shi-Latn": "Tachelhit (Latin)",                                                                                                                                            
  "shi-Latn-MA": "Tachelhit (Latin, Morocco)",                 "shi-Tfng": "Tachelhit (Tifinagh)",                               "shi-Tfng-MA": "Tachelhit (Tifinagh, Morocco)",                                                                                                                                            
  "si": "Sinhala",                                             "si-LK": "Sinhala (Sri Lanka)",                                   "sk": "Slovak",                                                                                                                                            
  "sk-SK": "Slovak (Slovakia)",                                "sl": "Slovenian",                                                "sl-SI": "Slovenian (Slovenia)",                                                                                                                                            
  "sma": "Sami (Southern)",                                    "sma-NO": "Sami, Southern (Norway)",                              "sma-SE": "Sami, Southern (Sweden)",                                                                                                                                            
  "smj": "Sami (Lule)",                                        "smj-NO": "Sami, Lule (Norway)",                                  "smj-SE": "Sami, Lule (Sweden)",                                                                                                                                            
  "smn": "Sami (Inari)",                                       "smn-FI": "Sami, Inari (Finland)",                                "sms": "Sami (Skolt)",                                                                                                                                            
  "sms-FI": "Sami, Skolt (Finland)",                           "sn": "Shona",                                                    "sn-Latn": "Shona (Latin)",                                                                                                                                            
  "sn-Latn-ZW": "Shona (Latin, Zimbabwe)",                     "so": "Somali",                                                   "so-DJ": "Somali (Djibouti)",                                                                                                                                            
  "so-ET": "Somali (Ethiopia)",                                "so-KE": "Somali (Kenya)",                                        "so-SO": "Somali (Somalia)",                                                                                                                                            
  "sq": "Albanian",                                            "sq-AL": "Albanian (Albania)",                                    "sq-MK": "Albanian (Macedonia, FYRO)",                                                                                                                                            
  "sq-XK": "Albanian (Kosovo)",                                "sr": "Serbian",                                                  "sr-Cyrl": "Serbian (Cyrillic)",                                                                                                                                            
  "sr-Cyrl-BA": "Serbian (Cyrillic, Bosnia and Herzegovina)",  "sr-Cyrl-ME": "Serbian (Cyrillic, Montenegro)",                   "sr-Cyrl-RS": "Serbian (Cyrillic, Serbia)",                                                                                                                                            
  "sr-Cyrl-XK": "Serbian (Cyrillic, Kosovo)",                  "sr-Latn": "Serbian (Latin)",                                     "sr-Latn-BA": "Serbian (Latin, Bosnia and Herzegovina)",                                                                                                                                            
  "sr-Latn-ME": "Serbian (Latin, Montenegro)",                 "sr-Latn-RS": "Serbian (Latin, Serbia)",                          "sr-Latn-XK": "Serbian (Latin, Kosovo)",                                                                                                                                            
  "ss": "Swati",                                               "ss-SZ": "Swati (Eswatini former Swaziland)",                     "ss-ZA": "Swati (South Africa)",                                                                                                                                            
  "ssy": "Saho",                                               "ssy-ER": "Saho (Eritrea)",                                       "st": "Southern Sotho",                                                                                                                                            
  "st-LS": "Sesotho (Lesotho)",                                "st-ZA": "Southern Sotho (South Africa)",                         "sv": "Swedish",                                                                                                                                            
  "sv-AX": "Swedish (Åland Islands)",                          "sv-FI": "Swedish (Finland)",                                     "sv-SE": "Swedish (Sweden)",                                                                                                                                            
  "sw": "Kiswahili",                                           "sw-CD": "Kiswahili (Congo DRC)",                                 "sw-KE": "Kiswahili (Kenya)",                                                                                                                                            
  "sw-TZ": "Kiswahili (Tanzania)",                             "sw-UG": "Kiswahili (Uganda)",                                    "syr": "Syriac",                                                                                                                                            
  "syr-SY": "Syriac (Syria)",                                  "ta": "Tamil",                                                    "ta-IN": "Tamil (India)",                                                                                                                                            
  "ta-LK": "Tamil (Sri Lanka)",                                "ta-MY": "Tamil (Malaysia)",                                      "ta-SG": "Tamil (Singapore)",                                                                                                                                            
  "te": "Telugu",                                              "te-IN": "Telugu (India)",                                        "teo": "Teso",                                                                                                                                            
  "teo-KE": "Teso (Kenya)",                                    "teo-UG": "Teso (Uganda)",                                        "tg": "Tajik",                                                                                                                                            
  "tg-Cyrl": "Tajik (Cyrillic)",                               "tg-Cyrl-TJ": "Tajik (Cyrillic, Tajikistan)",                     "th": "Thai",                                                                                                                                            
  "th-TH": "Thai (Thailand)",                                  "ti": "Tigrinya",                                                 "ti-ER": "Tigrinya (Eritrea)",                                                                                                                                            
  "ti-ET": "Tigrinya (Ethiopia)",                              "tig": "Tigre",                                                   "tig-ER": "Tigre (Eritrea)",                                                                                                                                            
  "tk": "Turkmen",                                             "tk-TM": "Turkmen (Turkmenistan)",                                "tn": "Setswana",                                                                                                                                            
  "tn-BW": "Setswana (Botswana)",                              "tn-ZA": "Setswana (South Africa)",                               "to": "Tongan",                                                                                                                                            
  "to-TO": "Tongan (Tonga)",                                   "tr": "Turkish",                                                  "tr-CY": "Turkish (Cyprus)",                                                                                                                                            
  "tr-TR": "Turkish (Turkey)",                                 "ts": "Tsonga",                                                   "ts-ZA": "Tsonga (South Africa)",                                                                                                                                            
  "tt": "Tatar",                                               "tt-RU": "Tatar (Russia)",                                        "twq": "Tasawaq",                                                                                                                                            
  "twq-NE": "Tasawaq (Niger)",                                 "tzm": "Tamazight",                                               "tzm-Arab": "Central Atlas Tamazight (Arabic)",                                                                                                                                            
  "tzm-Arab-MA": "Central Atlas Tamazight (Arabic, Morocco)",  "tzm-Latn": "Tamazight (Latin)",                                  "tzm-Latn-DZ": "Tamazight (Latin, Algeria)",                                                                                                                                            
  "tzm-Latn-MA": "Central Atlas Tamazight (Latin, Morocco)",   "tzm-Tfng": "Tamazight (Tifinagh)",                               "tzm-Tfng-MA": "Central Atlas Tamazight (Tifinagh, Morocco)",                                                                                                                                            
  "ug": "Uyghur",                                              "ug-CN": "Uyghur (PRC)",                                          "uk": "Ukrainian",                                                                                                                                            
  "uk-UA": "Ukrainian (Ukraine)",                              "ur": "Urdu",                                                     "ur-IN": "Urdu (India)",                                                                                                                                            
  "ur-PK": "Urdu (Islamic Republic of Pakistan)",              "uz": "Uzbek",                                                    "uz-Arab": "Uzbek (Perso-Arabic)",                                                                                                                                            
  "uz-Arab-AF": "Uzbek (Perso-Arabic, Afghanistan)",           "uz-Cyrl": "Uzbek (Cyrillic)",                                    "uz-Cyrl-UZ": "Uzbek (Cyrillic, Uzbekistan)",                                                                                                                                            
  "uz-Latn": "Uzbek (Latin)",                                  "uz-Latn-UZ": "Uzbek (Latin, Uzbekistan)",                        "vai": "Vai",                                                                                                                                            
  "vai-Latn": "Vai (Latin)",                                   "vai-Latn-LR": "Vai (Latin, Liberia)",                            "vai-Vaii": "Vai (Vai)",                                                                                                                                            
  "vai-Vaii-LR": "Vai (Vai, Liberia)",                         "ve": "Venda",                                                    "ve-ZA": "Venda (South Africa)",                                                                                                                                            
  "vi": "Vietnamese",                                          "vi-VN": "Vietnamese (Vietnam)",                                  "vo": "Volapük",                                                                                                                                            
  "vo-001": "Volapük (World)",                                 "vun": "Vunjo",                                                   "vun-TZ": "Vunjo (Tanzania)",                                                                                                                                            
  "wae": "Walser",                                             "wae-CH": "Walser (Switzerland)",                                 "wal": "Wolaytta",                                                                                                                                            
  "wal-ET": "Wolaytta (Ethiopia)",                             "wo": "Wolof",                                                    "wo-SN": "Wolof (Senegal)",                                                                                                                                            
  "xh": "isiXhosa",                                            "xh-ZA": "isiXhosa (South Africa)",                               "xog": "Soga",                                                                                                                                            
  "xog-UG": "Soga (Uganda)",                                   "yav": "Yangben",                                                 "yav-CM": "Yangben (Cameroon)",                                                                                                                                            
  "yi": "Yiddish",                                             "yi-001": "Yiddish (World)",                                      "yo": "Yoruba",                                                                                                                                            
  "yo-BJ": "Yoruba (Benin)",                                   "yo-NG": "Yoruba (Nigeria)",                                      "zgh": "Standard Moroccan Tamazight",                                                                                                                                            
  "zgh-Tfng": "Standard Moroccan Tamazight (Tifinagh)",        "zgh-Tfng-MA": "Standard Moroccan Tamazight (Tifinagh, Morocco)", "zh": "Chinese",                                                                                                                                            
  "zh-CN": "Chinese (Simplified, PRC)",                        "zh-Hans": "Chinese (Simplified)",                                "zh-Hans-HK": "Chinese (Simplified Han, Hong Kong SAR)",                                                                                                                                            
  "zh-Hans-MO": "Chinese (Simplified Han, Macao SAR)",         "zh-Hant": "Chinese (Traditional)",                               "zh-HK": "Chinese (Traditional, Hong Kong S.A.R.)",                                                                                                                                            
  "zh-MO": "Chinese (Traditional, Macao S.A.R.)",              "zh-SG": "Chinese (Simplified, Singapore)",                       "zh-TW": "Chinese (Traditional, Taiwan)",                                                                                                                                            
  "zu": "isiZulu",                                             "zu-ZA": "isiZulu (South Africa)"
};

const ASCII_ART = {
  mac: {
    art: [
      "${c1}                 ,xNMM.",
      "${c1}               .OMMMMo",
      '${c1}               lMM"',
      "${c1}     .;loddo:.  .olloddol;.",
      "${c1}   cKMMMMMMMMMMNWMMMMMMMMMM0:",
      "${c2} .KMMMMMMMMMMMMMMMMMMMMMMMWd.",
      "${c2} XMMMMMMMMMMMMMMMMMMMMMMMX.",
      "${c3};MMMMMMMMMMMMMMMMMMMMMMMM:",
      "${c3}:MMMMMMMMMMMMMMMMMMMMMMMM:",
      "${c4}.MMMMMMMMMMMMMMMMMMMMMMMMX.",
      "${c4} kMMMMMMMMMMMMMMMMMMMMMMMMWd.",
      "${c5} 'XMMMMMMMMMMMMMMMMMMMMMMMMMMk",
      "${c5}  'XMMMMMMMMMMMMMMMMMMMMMMMMK.",
      "${c6}    kMMMMMMMMMMMMMMMMMMMMMMd",
      "${c6}     ;KMMMMMMMWXXWMMMMMMMk.",
      '${c6}       "cooc*"    "*coo\'"',
    ],
    logoColors: [
      [118, 190, 27],
      [255, 200, 35],
      [255, 102, 22],
      [208, 7, 39],
      [177, 22, 172],
      [0, 162, 223],
    ],
    textColors: [
      [118, 190, 27],
      [255, 255, 255],
      [255, 255, 255],
      [255, 200, 35],
      [255, 200, 35],
    ],
  },
  manjaro: {
    art: [
      "${c1}██████████████████  ████████",
      "${c1}██████████████████  ████████",
      "${c1}██████████████████  ████████",
      "${c1}██████████████████  ████████",
      "${c1}████████            ████████",
      "${c1}████████  ████████  ████████",
      "${c1}████████  ████████  ████████",
      "${c1}████████  ████████  ████████",
      "${c1}████████  ████████  ████████",
      "${c1}████████  ████████  ████████",
      "${c1}████████  ████████  ████████",
      "${c1}████████  ████████  ████████",
      "${c1}████████  ████████  ████████",
      "${c1}████████  ████████  ████████",
    ],
    logoColors: [[50, 192, 165]],
    textColors: [
      [66, 255, 219],
      [255, 255, 255],
      [255, 255, 255],
      [66, 255, 219],
      [66, 255, 219],
    ],
  },
  ubuntu: {
    art: [
      "${c1}            .-/+oossssoo+\\-.",
      "${c1}        ´:+ssssssssssssssssss+:`",
      "${c1}      -+ssssssssssssssssssyyssss+-",
      "${c1}    .ossssssssssssssssss${c2}dMMMNy${c1}sssso.",
      "${c1}   /sssssssssss${c2}hdmmNNmmyNMMMMh${c1}ssssss\\",
      "${c1}  +sssssssss${c2}hm${c1}yd${c2}MMMMMMMNddddy${c1}ssssssss+",
      "${c1} /ssssssss${c2}hNMMM${c1}yh${c2}hyyyyhmNMMMNh${c1}ssssssss\\",
      "${c1}.ssssssss${c2}dMMMNh${c1}ssssssssss${c2}hNMMMd${c1}ssssssss.",
      "${c1}+ssss${c2}hhhyNMMNy${c1}ssssssssssss${c2}yNMMMy${c1}sssssss+",
      "${c1}oss${c2}yNMMMNyMMh${c1}ssssssssssssss${c2}hmmmh${c1}ssssssso",
      "${c1}oss${c2}yNMMMNyMMh${c1}sssssssssssssshmmmh${c1}ssssssso",
      "${c1}+ssss${c2}hhhyNMMNy${c1}ssssssssssss${c2}yNMMMy${c1}sssssss+",
      "${c1}.ssssssss${c2}dMMMNh${c1}ssssssssss${c2}hNMMMd${c1}ssssssss.",
      "${c1} \\ssssssss${c2}hNMMM${c1}yh${c2}hyyyyhdNMMMNh${c1}ssssssss/",
      "${c1}  +sssssssss${c2}dm${c1}yd${c2}MMMMMMMMddddy${c1}ssssssss+",
      "${c1}   \\sssssssssss${c2}hdmNNNNmyNMMMMh${c1}ssssss/",
      "${c1}    .ossssssssssssssssss${c2}dMMMNy${c1}sssso.",
      "${c1}      -+sssssssssssssssss${c2}yyy${c1}ssss+-",
      "${c1}        `:+ssssssssssssssssss+:`",
      "${c1}            .-\\+oossssoo+/-.",
    ],
    logoColors: [
      [233, 84, 32],
      [255, 255, 255],
      [233, 84, 32],
    ],
    textColors: [
      [255, 92, 34],
      [255, 255, 255],
      [255, 255, 255],
      [255, 92, 34],
      [255, 92, 34],
    ],
  },
  windows: {
    art: [
      "${c1}        ,.=:!!t3Z3z.,",
      "${c1}       :tt:::tt333EE3",
      "${c1}       Et:::ztt33EEEL${c2} @Ee.,      ..,",
      "${c1}      ;tt:::tt333EE7${c2} ;EEEEEEttttt33#",
      "${c1}     :Et:::zt333EEQ.${c2} $EEEEEttttt33QL",
      "${c1}     it::::tt333EEF${c2} @EEEEEEttttt33F",
      '${c1}    ;3=*^```"*4EEV${c2} :EEEEEEttttt33@.',
      "${c3}    ,.=::::!t=., ${c1}`${c2} @EEEEEEtttz33QF",
      '${c3}   ;::::::::zt33)${c2}   "4EEEtttji3P*',
      "${c3}  :t::::::::tt33.${c4}:Z3z..${c2}  ``${c4} ,..g.",
      "${c3}  i::::::::zt33F${c4} AEEEtttt::::ztF",
      "${c3} ;:::::::::t33V${c4} ;EEEttttt::::t3",
      "${c3} E::::::::zt33L${c4} @EEEtttt::::z3F",
      '${c3}{3=*^```"*4E3)${c4} ;EEEtttt:::::tZ`',
      "${c3}             `${c4} :EEEEtttt::::z7",
      '${c4}                 "VEzjt:;;z>*`',
    ],
    logoColors: [
      [248, 104, 44],
      [145, 195, 0],
      [0, 180, 241],
      [255, 195, 0],
    ],
    textColors: [
      [248, 104, 44],
      [255, 255, 255],
      [255, 255, 255],
      [145, 195, 0],
      [145, 195, 0],
    ],
  },
  linux: {
    art: [
      "${c2}        #####",
      "${c2}       #######",
      "${c2}       ##${c1}O${c2}#${c1}O${c2}##",
      "${c2}       #${c3}#####${c2}#",
      "${c2}     ##${c1}##${c3}###${c1}##${c2}##",
      "${c2}    #${c1}##########${c2}##",
      "${c2}   #${c1}############${c2}##",
      "${c2}   #${c1}############${c2}###",
      "${c3}  ##${c2}#${c1}###########${c2}##${c3}#",
      "${c3}######${c2}#${c1}#######${c2}#${c3}######",
      "${c3}#######${c2}#${c1}#####${c2}#${c3}#######",
      "${c3}  #####${c2}#######${c3}#####",
    ],
    logoColors: [
      [255, 255, 255],
      [26, 26, 26],
      [248, 192, 9],
    ],
    textColors: [
      [248, 192, 9],
      [255, 255, 255],
      [255, 255, 255],
      [248, 192, 9],
      [248, 192, 9],
    ],
  },

  aix: {
    art: [
      "${c1}           `:+ssssossossss+-`",
      "${c1}        .oys${c2}///oyhddddhyo///${c1}sy+.",
      "${c1}      /yo:+${c2}hNNNNNNNNNNNNNNNNh${c1}+:oy/",
      "${c1}    :h/:${c2}yNNNNNNNNNNNNNNNNNNNNNNy${c1}-+h:",
      "${c1}  `ys.${c2}yNNNNNNNNNNNNNNNNNNNNNNNNNNy${c1}.ys",
      "${c1} `h+-${c2}mNNNNNNNNNNNNNNNNNNNNNNNNNNNNm${c1}-oh",
      "${c1} h+-${c2}NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN${c1}.oy",
      "${c1}/d`${c2}mNNNNNNN/::mNNNd::m+:/dNNNo::dNNNd${c1}`m:",
      "${c1}h//${c2}NNNNNNN: . .NNNh  mNo  od. -dNNNNN${c1}:+y",
      "${c1}N.${c2}sNNNNNN+ -N/ -NNh  mNNd.   sNNNNNNNo${c1}-m",
      "${c1}N.${c2}sNNNNNs  +oo  /Nh  mNNs` ` /mNNNNNNo${c1}-m",
      "${c1}h//${c2}NNNNh  ossss` +h  md- .hm/ `sNNNNN${c1}:+y",
      "${c1}:d`${c2}mNNN+/yNNNNNd//y//h//oNNNNy//sNNN${c1}`m-",
      "${c1} yo-${c2}NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNm${c1}.ss",
      "${c1} `h+-${c2}mNNNNNNNNNNNNNNNNNNNNNNNNNNNNm${c1}-oy",
      "${c1}   sy.${c2}yNNNNNNNNNNNNNNNNNNNNNNNNNNs${c1}.yo",
      "${c1}    :h+-${c2}yNNNNNNNNNNNNNNNNNNNNNNs${c1}-oh-",
      "${c1}      :ys:${c2}/yNNNNNNNNNNNNNNNmy/${c1}:sy:",
      "${c1}        .+ys${c2}///osyhhhhys+///${c1}sy+.",
      "${c1}            -/osssossossso/-",
    ],
    logoColors: [
      [77, 126, 201],
      [129, 205, 35],
    ],
    textColors: [
      [129, 205, 35],
      [255, 255, 255],
      [255, 255, 255],
      [129, 205, 35],
      [129, 205, 35],
    ],
  },
  alma: {
    art: [
      "${c1}         'c:.",
      "${c1}        lkkkx, ..       ${c2}..   ,cc,",
      "${c1}        okkkk:ckkx'  ${c2}.lxkkx.okkkkd",
      "${c1}        .:llcokkx'  ${c2}:kkkxkko:xkkd,",
      "${c1}      .xkkkkdood:  ${c2};kx,  .lkxlll;",
      "${c1}       xkkx.       ${c2}xk'     xkkkkk:",
      "${c1}       'xkx.       ${c2}xd      .....,,",
      "${c3}      .. ${c1}:xkl'     ${c2}:c      ..''..",
      "${c3}    .dkx'  ${c1}.:ldl:'. ${c2}'  ${c4}':lollldkkxo;",
      "${c3}  .''lkkko'                     ${c4}ckkkx.",
      "${c3}'xkkkd:kkd.       ..  ${c5};'        ${c4}:kkxo.",
      "${c3},xkkkd;kk'      ,d;    ${c5}ld.   ${c4}':dkd::cc,",
      "${c3} .,,.;xkko'.';lxo.      ${c5}dx,  ${c4}:kkk'xkkkkc",
      "${c3}     'dkkkkkxo:.        ${c5};kx  ${c4}.kkk:;xkkd.",
      "${c3}       .....   ${c5}.;dk:.   ${c5}lkk.  ${c4}:;,",
      "             ${c5}:kkkkkkkdoxkkx",
      "              ${c5},c,,;;;:xkkd.",
      "                ${c5};kkkkl...",
      "                ${c5};kkkkl",
      "                 ${c5},od;",
    ],
    logoColors: [
      [255, 68, 71],
      [255, 204, 10],
      [135, 219, 43],
      [31, 195, 255],
      [0, 105, 219],
    ],
    textColors: [
      [255, 68, 71],
      [255, 68, 71],
      [255, 68, 71],
      [31, 195, 255],
      [31, 195, 255],
    ],
  },

  hash: {
    art: [
      "${c1}      +   ######   +",
      "${c1}    ###   ######   ###",
      "${c1}  #####   ######   #####",
      "${c1} ######   ######   ######",
      "",
      "${c1}####### '\"###### '\"########",
      "${c1}#######   ######   ########",
      "${c1}#######   ######   ########",
      "",
      "${c1} ###### '\"###### '\"######",
      "${c1}  #####   ######   #####",
      "${c1}    ###   ######   ###",
      "${c1}      ~   ######   ~",
    ],
    logoColors: [[88, 239, 218]],
    textColors: [
      [88, 239, 218],
      [255, 255, 255],
      [255, 255, 255],
      [88, 239, 218],
      [88, 239, 218],
    ],
  },

  alpine: {
    art: [
      "${c1}       .hddddddddddddddddddddddh.",
      "${c1}      :dddddddddddddddddddddddddd:",
      "${c1}     /dddddddddddddddddddddddddddd/",
      "${c1}    +dddddddddddddddddddddddddddddd+",
      "${c1}  `sdddddddddddddddddddddddddddddddds`",
      "${c1} `ydddddddddddd++hdddddddddddddddddddy`",
      "${c1}.hddddddddddd+`  `+ddddh:-sdddddddddddh.",
      "${c1}hdddddddddd+`      `+y:    .sddddddddddh",
      "${c1}ddddddddh+`   `//`   `.`     -sddddddddd",
      "${c1}ddddddh+`   `/hddh/`   `:s-    -sddddddd",
      "${c1}ddddh+`   `/+/dddddh/`   `+s-    -sddddd",
      "${c1}ddd+`   `/o` :dddddddh/`   `oy-    .yddd",
      "${c1}hdddyo+ohddyosdddddddddho+oydddy++ohdddh",
      "${c1}.hddddddddddddddddddddddddddddddddddddh.",
      "${c1} `yddddddddddddddddddddddddddddddddddy`",
      "${c1}  `sdddddddddddddddddddddddddddddddds`",
      "${c1}    +dddddddddddddddddddddddddddddd+",
      "${c1}     /dddddddddddddddddddddddddddd/",
      "${c1}      :dddddddddddddddddddddddddd:",
      "${c1}       .hddddddddddddddddddddddh.",
    ],
    logoColors: [[27, 111, 215]],
    textColors: [
      [32, 131, 255],
      [255, 255, 255],
      [255, 255, 255],
      [32, 131, 255],
      [32, 131, 255],
    ],
  },

  alter: {
    art: [
      "${c3}                      %,",
      "${c3}                    ^WWWw",
      "${c3}                   'wwwwww",
      "${c3}                  !wwwwwwww",
      "${c3}                 #`wwwwwwwww",
      "${c3}                @wwwwwwwwwwww",
      "${c3}               wwwwwwwwwwwwwww",
      "${c3}              wwwwwwwwwwwwwwww",
      "${c3}             wwwwwwwwwwwwwwwwww",
      "${c3}            wwwwwwwwwwwwwwwwwwww,",
      "${c2}           w~1${c3}.wwwwwwwwwwwwwwwwww,",
      "${c1}         3~:~${c2}1lli${c3}.wwwwwwwwwwwwwwww.",
      "${c1}        :~~:~${c2}?ttttzzzz${c3}wwwwwwwwwwwww",
      "${c1}       #<~:~~~~${c2}?llllltO-.${c3}wwwwwwwwwww",
      "${c1}      #~:~~:~:~~${c2}?ltlltlttO-.${c3}wwwwwwwww",
      "${c1}     @~:~~:~:~:~~(z${c2}ttlltltlOda.${c3}wwwwwww",
      "${c1}    @~:~~: ~:~~:~:(z${c2}ltlltlO    a,${c3}wwwwww",
      "${c1}   8~~:~~:~~~~:~~~~_1${c2}ltltu          ${c3},www",
      "${c1}  5~~:~~:~~:~~:~~:~~~_1${c2}ltq             ${c3}N,,",
      "${c1} g~:~~:~~~:~~:~~:~:~~~~${c2}1q                ${c3}N,",
    ],
    logoColors: [
      [0, 110, 255],
      [0, 84, 152],
      [0, 154, 255],
    ],
    textColors: [
      [32, 131, 255],
      [255, 255, 255],
      [32, 131, 255],
      [32, 131, 255],
      [32, 131, 255],
    ],
  },

  amazon: {
    art: [
      "${c1}                    s",
      "${c1}                .ohmNmyo:.",
      "${c1}            .:+shmoydNNdyo:.`",
      "${c1}      `.:+shmMMMMMMMMMMMMMMmhs+:.`",
      "${c1}    -+hNNMMMMMMMMMMMMMMMMMMMMMMNNho-",
      "${c1}.``      -/+shmNNMMMMMMNNmhs+/-      ``.",
      "${c1}dNmhs+:.       `.:/oo/:.`       .:+shmNd",
      "${c1}dMMMMMMMNdhs+:..        ..:+shdNMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMNds    odNMMMMMMMMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd",
      "${c1}dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd",
      "${c1}.:+ydNMMMMMMMMMMMh    yMMMMMMMMMMMNdy+:.",
      "${c1}     `.:+shNMMMMMh    yMMMMMNhs+:``",
      "${c1}            `-+shy    shs+:`",
    ],
    logoColors: [[255, 153, 0]],
    textColors: [
      [255, 153, 0],
      [255, 255, 255],
      [255, 153, 0],
      [255, 153, 0],
      [255, 153, 0],
    ],
  },

  anarchy: {
    art: [
      "${c2}                         ..",
      "${c2}                        ..",
      "${c2}                      :..",
      "${c2}                    :+++.",
      "${c1}              .:::++${c2}++++${c1}+::.",
      "${c1}          .:+######${c2}++++${c1}######+:.",
      "${c1}       .+#########${c2}+++++${c1}##########:.",
      "${c1}     .+##########${c2}+++++++${c1}##${c2}+${c1}#########+.",
      "${c1}    +###########${c2}+++++++++${c1}############:",
      "${c1}   +##########${c2}++++++${c1}#${c2}++++${c1}#${c2}+${c1}###########+",
      "${c1}  +###########${c2}+++++${c1}###${c2}++++${c1}#${c2}+${c1}###########+",
      "${c1} :##########${c2}+${c1}#${c2}++++${c1}####${c2}++++${c1}#${c2}+${c1}############:",
      "${c1} ###########${c2}+++++${c1}#####${c2}+++++${c1}#${c2}+${c1}###${c2}++${c1}######+",
      "${c1}.##########${c2}++++++${c1}#####${c2}++++++++++++${c1}#######.",
      "${c1}.##########${c2}+++++++++++++++++++${c1}###########.",
      "${c1} #####${c2}++++++++++++++${c1}###${c2}++++++++${c1}#########+",
      "${c1} :###${c2}++++++++++${c1}#########${c2}+++++++${c1}#########:",
      "${c1}  +######${c2}+++++${c1}##########${c2}++++++++${c1}#######+",
      "${c1}   +####${c2}+++++${c1}###########${c2}+++++++++${c1}#####+",
      "${c1}    :##${c2}++++++${c1}############${c2}++++++++++${c1}##:",
      "${c1}     .${c2}++++++${c1}#############${c2}++++++++++${c1}+.",
      "${c1}      :${c2}++++${c1}###############${c2}+++++++${c1}::",
      "${c1}     .${c2}++. .:+${c1}##############${c2}+++++++${c1}..",
      "${c1}     ${c2}.:.${c1}      ..::++++++::..:${c2}++++${c1}+.",
      "${c1}     ${c2}.${c1}                       ${c2}.:+++${c1}.",
      "${c1}                                ${c2}.:${c1}:",
      "${c1}                                   ${c2}..${c1}",
      "${c1}                                    ${c2}..${c1}",
    ],
    logoColors: [
      [255, 255, 255],
      [27, 147, 209],
    ],
    textColors: [
      [27, 147, 209],
      [255, 255, 255],
      [255, 255, 255],
      [27, 147, 209],
      [27, 147, 209],
    ],
  },

  android: {
    art: [
      "${c1}         -o          o-",
      "${c1}          +hydNNNNdyh+",
      "${c1}        +mMMMMMMMMMMMMm+",
      "${c1}      `dMM${c2}  ${c1}NMMMMMMN${c2}  ${c1}MMd`",
      "${c1}      hMMMMMMMMMMMMMMMMMMh",
      "${c1}  ..  oooooooooooooooooooo  ..",
      "${c1}.mMMm`MMMMMMMMMMMMMMMMMMMM`mMMm.",
      "${c1}:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:",
      "${c1}:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:",
      "${c1}:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:",
      "${c1}:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:",
      "${c1}-MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM-",
      "${c1} +yy+ MMMMMMMMMMMMMMMMMMMM +yy+",
      "${c1}      mMMMMMMMMMMMMMMMMMMm",
      "${c1}      `/++MMMMh++hMMMM++/`",
      "${c1}          MMMMo  oMMMM",
      "${c1}          MMMMo  oMMMM",
      "${c1}          oNMm-  -mMNs",
    ],
    logoColors: [
      [165, 199, 54],
      [165, 199, 54],
    ],
    textColors: [
      [165, 199, 54],
      [255, 255, 255],
      [165, 199, 54],
      [165, 199, 54],
      [165, 199, 54],
    ],
  },

  instant: {
    art: [
      "${c1}",
      "${c1}     'cx0XWWMMWNKOd:'.",
      "${c1}  .;kNMMMMMMMMMMMMMWNKd'",
      "${c1} 'kNMMMMMMWNNNWMMMMMMMMXo.",
      "${c1},0MMMMMW0o;'..,:dKWMMMMMWx.",
      "${c1}OMMMMMXl.        .xNMMMMMNo",
      "${c1}WMMMMNl           .kWWMMMMO'",
      "${c1}MMMMMX;            oNWMMMMK,",
      "${c1}NMMMMWo           .OWMMMMMK,",
      "${c1}kWMMMMNd.        ,kWMMMMMMK,",
      "${c1}'kWMMMMWXxl:;;:okNMMMMMMMMK,",
      "${c1} .oXMMMMMMMWWWMMMMMMMMMMMMK,",
      "${c1}   'oKWMMMMMMMMMMMMMMMMMMMK,",
      "${c1}     .;lxOKXXXXXXXXXXXXXXXO;......",
      "${c1}          ................,d0000000kd:.",
      "${c1}                          .kMMMMMMMMMW0;",
      "${c1}                          .kMMMMMMMMMMMX",
      "${c1}                          .xMMMMMMMMMMMW",
      "${c1}                           cXMMMMMMMMMM0",
      "${c1}                            :0WMMMMMMNx,",
      "${c1}                             .o0NMWNOc.",
    ],
    logoColors: [[255, 255, 255]],
    textColors: [
      [93, 192, 255],
      [255, 255, 255],
      [93, 192, 255],
      [93, 192, 255],
      [93, 192, 255],
    ],
  },

  antergos: {
    art: [
      "${c2}              `.-/::/-``",
      "${c2}            .-/osssssssso/.",
      "${c2}           :osyysssssssyyys+-",
      "${c2}        `.+yyyysssssssssyyyyy+.",
      "${c2}       `/syyyyyssssssssssyyyyys-`",
      "${c2}      `/yhyyyyysss${c1}++${c2}ssosyyyyhhy/`",
      "${c2}     .ohhhyyyys${c1}o++/+o${c2}so${c1}+${c2}syy${c1}+${c2}shhhho.",
      "${c2}    .shhhhys${c1}oo++//+${c2}sss${c1}+++${c2}yyy${c1}+s${c2}hhhhs.",
      "${c2}   -yhhhhs${c1}+++++++o${c2}ssso${c1}+++${c2}yyy${c1}s+o${c2}hhddy:",
      "${c2}  -yddhhy${c1}o+++++o${c2}syyss${c1}++++${c2}yyy${c1}yooy${c2}hdddy-",
      "${c2} .yddddhs${c1}o++o${c2}syyyyys${c1}+++++${c2}yyhh${c1}sos${c2}hddddy`",
      "${c2}`odddddhyosyhyyyyyy${c1}++++++${c2}yhhhyosddddddo",
      "${c2}.dmdddddhhhhhhhyyyo${c1}+++++${c2}shhhhhohddddmmh.",
      "${c2}ddmmdddddhhhhhhhso${c1}++++++${c2}yhhhhhhdddddmmdy",
      "${c2}dmmmdddddddhhhyso${c1}++++++${c2}shhhhhddddddmmmmh",
      "${c2}-dmmmdddddddhhys${c1}o++++o${c2}shhhhdddddddmmmmd-",
      "${c2}.smmmmddddddddhhhhhhhhhdddddddddmmmms.",
      "${c2}   `+ydmmmdddddddddddddddddddmmmmdy/.",
      "${c2}      `.:+ooyyddddddddddddyyso+:.`",
    ],
    logoColors: [
      [255, 255, 255],
      [41, 81, 170],
    ],
    textColors: [
      [50, 99, 208],
      [255, 255, 255],
      [255, 255, 255],
      [50, 99, 208],
      [50, 99, 208],
    ],
  },

  aperture: {
    art: [
      "${c1}              .,-:;//;:=,",
      "${c1}          . :H@@@MM@M#H/.,+%;,",
      "${c1}       ,/X+ +M@@M@MM%=,-%HMMM@X/",
      "${c1}     -+@MM; SM@@MH+-,;XMMMM@MMMM@+-",
      "${c1}    ;@M@@M- XM@X;. -+XXXXXHHH@M@M#@/.",
      "${c1}  ,%MM@@MH ,@%=             .---=-=:=,.",
      "${c1}  =@#@@@MX.,                -%HXSS%%%:;",
      "${c1} =-./@M@MS                   .;@MMMM@MM:",
      "${c1} X@/ -SMM/                    . +MM@@@MS",
      "${c1},@M@H: :@:                    . =X#@@@@-",
      "${c1},@@@MMX, .                    /H- ;@M@M=",
      "${c1}.H@@@@M@+,                    %MM+..%#S.",
      "${c1} /MMMM@MMH/.                  XM@MH; =;",
      "${c1}  /%+%SXHH@S=              , .H@@@@MX,",
      "${c1}   .=--------.           -%H.,@@@@@MX,",
      "${c1}   .%MM@@@HHHXXSSS%+- .:SMMX =M@@MM%.",
      "${c1}     =XMMM@MM@MM#H;,-+HMM@M+ /MMMX=",
      "${c1}       =%@M@M#@S-.=S@MM@@@M; %M%=",
      "${c1}         ,:+S+-,/H#MMMMMMM@= =,",
      "${c1}               =++%%%%+/:-.",
    ],
    logoColors: [[0, 153, 255]],
    textColors: [
      [0, 153, 255],
      [255, 255, 255],
      [0, 153, 255],
      [0, 153, 255],
      [0, 153, 255],
    ],
  },

  apricity: {
    art: [
      "                                      ./o-",
      "${c2}          ``...``              `:. -/:",
      "${c2}     `-+ymNMMMMMNmho-`      :sdNNm/",
      "${c2}   `+dMMMMMMMMMMMMMMMmo` sh:.:::-",
      "${c2}  /mMMMMMMMMMMMMMMMMMMMm/`sNd/",
      "${c2} oMMMMMMMMMMMMMMMMMMMMMMMs -`",
      "${c2}:MMMMMMMMMMMMMMMMMMMMMMMMM/",
      "${c2}NMMMMMMMMMMMMMMMMMMMMMMMMMd",
      "${c2}MMMMMMMmdmMMMMMMMMMMMMMMMMd",
      "${c2}MMMMMMy` .mMMMMMMMMMMMmho:`",
      "${c2}MMMMMMNo/sMMMMMMMNdy+-.`-/",
      "${c2}MMMMMMMMMMMMNdy+:.`.:+hmm:",
      "${c2}MMMMMMMmhs+-.`.:+ymNMMMy.",
      "${c2}MMMMMM/`.-/ohmNMMMMMMy-",
      "${c2}MMMMMMNmNNMMMMMMMMmo.",
      "${c2}MMMMMMMMMMMMMMMms:`",
      "${c2}MMMMMMMMMMNds/.",
      "${c2}dhhyys+/-`",
    ],
    logoColors: [
      [255, 255, 255],
      [255, 255, 255],
    ],
    textColors: [
      [93, 192, 255],
      [255, 255, 255],
      [93, 192, 255],
      [93, 192, 255],
      [93, 192, 255],
    ],
  },

  archcraft: {
    art: [
      "${c1}                   -o\\",
      "${c1}                  :ooo:",
      "${c1}                 .ooooo.",
      "${c1}                 ooooooo.",
      "${c1}                +oooooooo.",
      "${c1}               -oooooooooo.",
      "${c1}              --:-+oooooooo.",
      "${c1}             yooo+=+sooooooo.",
      "${c1}            yoooooosooooooooo.",
      "${c1}           y+ooooooooooooooooo.",
      "${c1}          yoooooooooooooooooooo`",
      "${c1}         yoooooo+oo=  :oo++ooooo`",
      "${c1}        :oooooo.           +ooooo-",
      "${c1}       -ooooooo.   .::.    +ooosoo=",
      "${c1}      -oooooo`    .oooo`     +os-=o=",
      "${c1}     =ooooooo=:    `oo+    :=ooo=--`.",
      "${c1}    +ooooooooos.          .=sooooooo+-",
      "${c1}  .+osossos+-`              `-+osososs+.",
      "${c1} :sss+=-:`                     `:-=+ssss:",
      "${c1}:=-:`                                `-=+:",
    ],
    textColors: [[177, 231, 154]],
    textColors: [
      [177, 231, 154],
      [255, 255, 255],
      [177, 231, 154],
      [177, 231, 154],
      [177, 231, 154],
    ],
  },

  arco: {
    art: [
      "${c2}                    /-",
      "${c2}                   ooo:",
      "${c2}                  yoooo/",
      "${c2}                 yooooooo",
      "${c2}                yooooooooo",
      "${c2}               yooooooooooo",
      "${c2}             .yooooooooooooo",
      "${c2}            .oooooooooooooooo",
      "${c2}           .oooooooarcoooooooo",
      "${c2}          .ooooooooo-oooooooooo",
      "${c2}         .ooooooooo-  oooooooooo",
      "${c2}        :ooooooooo.    :ooooooooo",
      "${c2}       :ooooooooo.      :ooooooooo",
      "${c2}      :oooarcooo         .oooarcooo",
      "${c2}     :ooooooooy           .ooooooooo",
      "${c2}    :ooooooooo   ${c1}/ooooooooooooooooooo${c2}",
      "${c2}   :ooooooooo      ${c1}.-ooooooooooooooooo.${c2}",
      "${c2}  ooooooooo-             ${c1}-ooooooooooooo.${c2}",
      "${c2} ooooooooo-                 ${c1}.-oooooooooo.${c2}",
      "${c2}ooooooooo.                     ${c1}-ooooooooo${c2}",
    ],
    logoColors: [
      [255, 255, 255],
      [103, 145, 236],
    ],
    textColors: [
      [103, 145, 236],
      [255, 255, 255],
      [103, 145, 236],
      [103, 145, 236],
      [103, 145, 236],
    ],
  },
  archbox: {
    art: [
      "${c1}              ...:+oh/:::...",
      "${c1}         ..-/oshhhhhh`   `::::-..",
      "${c1}     .:/ohhhhhhhhhhhh`        `-::::.",
      "${c1} .+shhhhhhhhhhhhhhhhh`             `.::-..",
      "${c1} /`-:+shhhhhhhhhhhhhh`            .-/+shh",
      "${c1} /      .:/ohhhhhhhhh`       .:/ohhhhhhhh",
      "${c1} /           `-:+shhh`  ..:+shhhhhhhhhhhh",
      "${c1} /                 .:ohhhhhhhhhhhhhhhhhhh",
      "${c1} /                  `hhhhhhhhhhhhhhhhhhhh",
      "${c1} /                  `hhhhhhhhhhhhhhhhhhhh",
      "${c1} /                  `hhhhhhhhhhhhhhhhhhhh",
      "${c1} /                  `hhhhhhhhhhhhhhhhhhhh",
      "${c1} /      .+o+        `hhhhhhhhhhhhhhhhhhhh",
      "${c1} /     -hhhhh       `hhhhhhhhhhhhhhhhhhhh",
      "${c1} /     ohhhhho      `hhhhhhhhhhhhhhhhhhhh",
      "${c1} /:::+`hhhhoos`     `hhhhhhhhhhhhhhhhhs+`",
      "${c1}    `--/:`   /:     `hhhhhhhhhhhho/-",
      "${c1}             -/:.   `hhhhhhs+:-`",
      "${c1}                ::::/ho/-`",
    ],
    logoColors: [[22, 198, 12]],
    textColors: [
      [22, 198, 12],
      [255, 255, 255],
      [22, 198, 12],
      [22, 198, 12],
      [22, 198, 12],
    ],
  },

  archlabs: {
    art: [
      "${c1}                     'c'",
      "${c1}                    'kKk,",
      "${c1}                   .dKKKx.",
      "${c1}                  .oKXKXKd.",
      "${c1}                 .l0XXXXKKo.",
      "${c1}                 c0KXXXXKX0l.",
      "${c1}                :0XKKOxxOKX0l.",
      "${c1}               :OXKOc. .c0XX0l.",
      "${c1}              :OK0o. ${c4}...${c1}'dKKX0l.",
      "${c1}             :OX0c  ${c4};xOx'${c1}'dKXX0l.",
      "${c1}            :0KKo.${c4}.o0XXKd'.${c1}lKXX0l.",
      "${c1}           c0XKd.${c4}.oKXXXXKd..${c1}oKKX0l.",
      "${c1}         .c0XKk;${c4}.l0K0OO0XKd..${c1}oKXXKo.",
      "${c1}        .l0XXXk:${c4},dKx,.'l0XKo.${c1}.kXXXKo.",
      "${c1}       .o0XXXX0d,${c4}:x;   .oKKx'${c1}.dXKXXKd.",
      "${c1}      .oKXXXXKK0c.${c4};.    :00c'${c1}cOXXXXXKd.",
      "${c1}     .dKXXXXXXXXk,${c4}.     cKx'${c1}'xKXXXXXXKx'",
      "${c1}    'xKXXXXK0kdl:.     ${c4}.ok; ${c1}.cdk0KKXXXKx'",
      "${c1}   'xKK0koc,..         ${c4}'c, ${c1}    ..,cok0KKk,",
      "${c1}  ,xko:'.             ${c4}.. ${c1}           .':okx;",
      "${c1} .,'.                                   .',.",
    ],
    logoColors: [
      [97, 214, 214],
      [97, 214, 214],
      [97, 214, 214],
      [231, 72, 86],
    ],
    textColors: [
      [97, 214, 214],
      [231, 72, 86],
      [97, 214, 214],
      [231, 72, 86],
      [231, 72, 86],
      [97, 214, 214],
    ],
  },

  arch_old: {
    art: [
      "${c1}             __",
      "${c1}         *=(SDGJT=*",
      "${c1}       _GTDJHGGFCVS)",
      "${c1}      ,GTDJGGDTDFBGX0",
      "${c1}     JDJDIJHRORVFSBSVL${c2}-=+=,_",
      '${c1}    IJFDUFHJNXIXCDXDSV,${c2}  "DEBL',
      "${c1}   [LKDSDJTDU=OUSCSBFLD.${c2}   '?ZWX,",
      "${c1}  ,LMDSDSWH'     `DCBOSI${c2}     DRDS],",
      "${c1}  SDDFDFH'         !YEWD,${c2}   )HDROD",
      "${c1} !KMDOCG            &GSU|${c2}\\_GFHRGO\\'",
      "${c1} HKLSGP'${c2}           __${c1}\\TKM0${c2}\\GHRBV)'",
      "${c1}JSNRVW'${c2}       __+MNAEC${c1}\\IOI,${c2}\\BN'",
      "${c1}HELK['${c2}    __,=OFFXCBGHC${c1}\\FD)",
      "${c1}?KGHE ${c2}\\_-#DASDFLSV='${c1}    'EF",
      "${c1}'EHTI                    !H",
      "${c1} `0F'                    '!",
    ],
    logoColors: [
      [129, 175, 210],
      [255, 255, 255],
    ],
    textColors: [
      [129, 175, 210],
      [255, 255, 255],
      [129, 175, 210],
      [129, 175, 210],
      [129, 175, 210],
    ],
  },

  archstrike: {
    art: [
      "${c1}                   *   ",
      "${c1}                  **.",
      "${c1}                 ****",
      "${c1}                ******",
      "${c1}                *******",
      "${c1}              ** *******",
      "${c1}             **** *******",
      "${c1}            ****${c2}_____${c1}***${c2}/${c1}*",
      "${c1}           ***${c2}/${c1}*******${c2}//${c1}***",
      "${c1}          **${c2}/${c1}********${c2}///${c1}*${c2}/${c1}**",
      "${c1}         **${c2}/${c1}*******${c2}////${c1}***${c2}/${c1}**",
      "${c1}        **${c2}/${c1}****${c2}//////.,${c1}****${c2}/${c1}**",
      "${c1}       ***${c2}/${c1}*****${c2}/////////${c1}**${c2}/${c1}***",
      "${c1}      ****${c2}/${c1}****    ${c2}/////${c1}***${c2}/${c1}****",
      "${c1}     ******${c2}/${c1}***  ${c2}////   ${c1}**${c2}/${c1}******",
      "${c1}    ********${c2}/${c1}* ${c2}///      ${c1}*${c2}/${c1}********",
      "${c1}  ,******     ${c2}// ______ /    ${c1}******,",
    ],
    logoColors: [
      [97, 214, 214],
      [255, 255, 255],
    ],
    textColors: [
      [97, 214, 214],
      [255, 255, 255],
      [97, 214, 214],
      [97, 214, 214],
      [97, 214, 214],
    ],
  },

  xferience: {
    art: [
      "${c1}           ``--:::::::-.`",
      "${c1}        .-/+++ooooooooo+++:-`",
      "${c1}     `-/+oooooooooooooooooo++:.",
      "${c1}    -/+oooooo/+ooooooooo+/ooo++:`",
      "${c1}  `/+oo++oo.   .+oooooo+.-: +:-o+-",
      "${c1} `/+o/.  -o.    :oooooo+ ```:.+oo+-",
      "${c1}`:+oo-    -/`   :oooooo+ .`-`+oooo/.",
      "${c1}.+ooo+.    .`   `://///+-+..oooooo+:`",
      "${c1}-+ooo:`                ``.-+oooooo+/`",
      "${c1}-+oo/`                       :+oooo/.",
      "${c1}.+oo:            ..-/. .      -+oo+/`",
      "${c1}`/++-         -:::++::/.      -+oo+-",
      "${c1} ./o:          `:///+-     `./ooo+:`",
      "${c1}  .++-         `` /-`   -:/+oooo+:`",
      "${c1}   .:+/:``          `-:ooooooo++-",
      "${c1}     ./+o+//:...../+oooooooo++:`",
      "${c1}       `:/++ooooooooooooo++/-`",
      "${c1}          `.-//++++++//:-.`",
      "${c1}               ``````",
    ],
    logoColors: [
      [0, 178, 255],
      [255, 255, 255],
    ],
    textColors: [
      [0, 178, 255],
      [255, 255, 255],
      [0, 178, 255],
      [0, 178, 255],
      [0, 178, 255],
    ],
  },

  archmerge: {
    art: [
      "${c1}                    y:",
      "${c1}                  sMN-",
      "${c1}                 +MMMm`",
      "${c1}                /MMMMMd`",
      "${c1}               :NMMMMMMy",
      "${c1}              -NMMMMMMMMs",
      "${c1}             .NMMMMMMMMMM+",
      "${c1}            .mMMMMMMMMMMMM+",
      "${c1}            oNMMMMMMMMMMMMM+",
      "${c1}          `+:-+NMMMMMMMMMMMM+",
      "${c1}          .sNMNhNMMMMMMMMMMMM/",
      "${c1}        `hho/sNMMMMMMMMMMMMMMM/",
      "${c1}       `.`omMMmMMMMMMMMMMMMMMMM+",
      "${c1}      .mMNdshMMMMd+::oNMMMMMMMMMo",
      "${c1}     .mMMMMMMMMM+     `yMMMMMMMMMs",
      "${c1}    .NMMMMMMMMM/        yMMMMMMMMMy",
      "${c1}   -NMMMMMMMMMh         `mNMMMMMMMMd`",
      "${c1}  /NMMMNds+:.`             `-/oymMMMm.",
      "${c1} +Mmy/.                          `:smN:",
      "${c1}/+.                                  -o.",
    ],
    logoColors: [[103, 145, 236]],
    textColors: [
      [103, 145, 236],
      [255, 255, 255],
      [103, 145, 236],
      [103, 145, 236],
      [103, 145, 236],
    ],
  },

  arch: {
    art: [
      "${c1}                   -`",
      "${c1}                  .o+`",
      "${c1}                 `ooo/",
      "${c1}                `+oooo:",
      "${c1}               `+oooooo:",
      "${c1}               -+oooooo+:",
      "${c1}             `/:-:++oooo+:",
      "${c1}            `/++++/+++++++:",
      "${c1}           `/++++++++++++++:",
      "${c1}          `/+++o${c2}oooooooo${c1}oooo/`",
      "${c2}         ${c1}./${c2}ooosssso++osssssso${c1}+`",
      "${c2}        .oossssso-````/ossssss+`",
      "${c2}       -osssssso.      :ssssssso.",
      "${c2}      :osssssss/        osssso+++.",
      "${c2}     /ossssssss/        +ssssooo/-",
      "${c1}   `/ossssso+/:-        -:/+osssso+-",
      "${c1}  `+sso+:-`                 `.-/+oso:",
      "${c1} `++:.                           `-/+/",
      "${c1} .`                                 `/",
    ],
    logoColors: [
      [27, 173, 247],
      [27, 173, 247],
    ],
    textColors: [
      [27, 173, 247],
      [255, 255, 255],
      [27, 173, 247],
      [27, 173, 247],
      [27, 173, 247],
    ],
  },

  artix: {
    art: [
      "${c1}                   '",
      "${c1}                  'o'",
      "${c1}                 'ooo'",
      "${c1}                'ooxoo'",
      "${c1}               'ooxxxoo'",
      "${c1}              'oookkxxoo'",
      "${c1}             'oiioxkkxxoo'",
      "${c1}            ':;:iiiioxxxoo'",
      "${c1}               `'.;::ioxxoo'",
      "${c1}          '-.      `':;jiooo'",
      "${c1}         'oooio-..     `'i:io'",
      "${c1}        'ooooxxxxoio:,.   `'-;'",
      "${c1}       'ooooxxxxxkkxoooIi:-.  `'",
      "${c1}      'ooooxxxxxkkkkxoiiiiiji'",
      "${c1}     'ooooxxxxxkxxoiiii:'`     .i'",
      "${c1}    'ooooxxxxxoi:::'`       .;ioxo'",
      "${c1}   'ooooxooi::'`         .:iiixkxxo'",
      "${c1}  'ooooi:'`                `'';ioxxo'",
      "${c1} 'i:'`                          '':io'",
      "${c1}'`                                   `'",
    ],
    logoColors: [[18, 189, 242]],
    textColors: [
      [18, 189, 242],
      [255, 255, 255],
      [18, 189, 242],
      [18, 189, 242],
      [18, 189, 242],
    ],
  },
  arya: {
    art: [
      "${c1}                `oyyy/${c2}-yyyyyy+",
      "${c1}               -syyyy/${c2}-yyyyyy+",
      "${c1}              .syyyyy/${c2}-yyyyyy+",
      "${c1}              :yyyyyy/${c2}-yyyyyy+",
      "${c1}           `/ :yyyyyy/${c2}-yyyyyy+",
      "${c1}          .+s :yyyyyy/${c2}-yyyyyy+",
      "${c1}         .oys :yyyyyy/${c2}-yyyyyy+",
      "${c1}        -oyys :yyyyyy/${c2}-yyyyyy+",
      "${c1}       :syyys :yyyyyy/${c2}-yyyyyy+",
      "${c1}      /syyyys :yyyyyy/${c2}-yyyyyy+",
      "${c1}     +yyyyyys :yyyyyy/${c2}-yyyyyy+",
      "${c1}   .oyyyyyyo. :yyyyyy/${c2}-yyyyyy+ ---------",
      "${c1}  .syyyyyy+`  :yyyyyy/${c2}-yyyyy+-+syyyyyyyy",
      "${c1} -syyyyyy/    :yyyyyy/${c2}-yyys:.syyyyyyyyyy",
      "${c1}:syyyyyy/     :yyyyyy/${c2}-yyo.:syyyyyyyyyyy",
    ],
    logoColors: [
      [22, 174, 22],
      [255, 132, 22],
    ],
    textColors: [
      [22, 174, 22],
      [255, 132, 22],
      [22, 174, 22],
      [22, 174, 22],
      [22, 174, 22],
      [255, 132, 22],
    ],
  },

  bedrock: {
    art: [
      "${c1}--------------------------------------",
      "${c1}--------------------------------------",
      "${c1}--------------------------------------",
      "${c1}---${c2}\\\\\\\\\\\\\\\\\\\\\\\\${c1}-----------------------",
      "${c1}----${c2}\\\\\\      \\\\\\${c1}----------------------",
      "${c1}-----${c2}\\\\\\      \\\\\\${c1}---------------------",
      "${c1}------${c2}\\\\\\      \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\${c1}------",
      "${c1}-------${c2}\\\\\\                    \\\\\\${c1}-----",
      "${c1}--------${c2}\\\\\\                    \\\\\\${c1}----",
      "${c1}---------${c2}\\\\\\        ______      \\\\\\${c1}---",
      "${c1}----------${c2}\\\\\\                   ///${c1}---",
      "${c1}-----------${c2}\\\\\\                 ///${c1}----",
      "${c1}------------${c2}\\\\\\               ///${c1}-----",
      "${c1}-------------${c2}\\\\\\////////////////${c1}------",
      "${c1}--------------------------------------",
      "${c1}--------------------------------------",
      "${c1}--------------------------------------",
    ],
    logoColors: [
      [118, 118, 118],
      [255, 255, 255],
    ],
    textColors: [
      [118, 118, 118],
      [255, 255, 255],
      [118, 118, 118],
      [118, 118, 118],
      [118, 118, 118],
    ],
  },

  blackarch: {
    art: [
      "${c3}                   00",
      "${c3}                   11",
      "${c3}                  ====${c1}",
      "${c1}                  .${c3}//${c1}",
      "${c1}                 `o${c3}//${c1}:",
      "${c1}                `+o${c3}//${c1}o:",
      "${c1}               `+oo${c3}//${c1}oo:",
      "${c1}               -+oo${c3}//${c1}oo+:",
      "${c1}             `/:-:+${c3}//${c1}ooo+:",
      "${c1}            `/+++++${c3}//${c1}+++++:",
      "${c1}           `/++++++${c3}//${c1}++++++:",
      "${c1}          `/+++oooo${c3}//${c1}ooooooo/`",
      "${c1}         ./ooosssso${c3}//${c1}osssssso+`",
      "${c1}        .oossssso-`${c3}//${c1}`/ossssss+`",
      "${c1}       -osssssso.  ${c3}//${c1}  :ssssssso.",
      "${c1}      :osssssss/   ${c3}//${c1}   osssso+++.",
      "${c1}     /ossssssss/   ${c3}//${c1}   +ssssooo/-",
      "${c1}   `/ossssso+/:-   ${c3}//${c1}   -:/+osssso+-",
      "${c1}  `+sso+:-`        ${c3}//${c1}       `.-/+oso:",
      "${c1} `++:.             ${c3}//${c1}            `-/+/",
      "${c1} .`                ${c3}/${c1}                `/",
    ],
    logoColors: [
      [216, 36, 43],
      [118, 118, 118],
      [156, 156, 156],
    ],
    textColors: [
      [216, 36, 43],
      [255, 255, 255],
      [216, 36, 43],
      [216, 36, 43],
      [216, 36, 43],
    ],
  },

  blag: {
    art: [
      "${c1}             d",
      "${c1}            ,MK:",
      "${c1}            xMMMX:",
      "${c1}           .NMMMMMX;",
      "${c1}           lMMMMMMMM0clodkO0KXWW:",
      "${c1}           KMMMMMMMMMMMMMMMMMMX'",
      "${c1}      .;d0NMMMMMMMMMMMMMMMMMMK.",
      "${c1} .;dONMMMMMMMMMMMMMMMMMMMMMMx",
      "${c1}'dKMMMMMMMMMMMMMMMMMMMMMMMMl",
      "${c1}   .:xKWMMMMMMMMMMMMMMMMMMM0.",
      "${c1}       .:xNMMMMMMMMMMMMMMMMMK.",
      "${c1}          lMMMMMMMMMMMMMMMMMMK.",
      "${c1}          ,MMMMMMMMWkOXWMMMMMM0",
      "${c1}          .NMMMMMNd.     `':ldko",
      "${c1}           OMMMK:",
      "${c1}           oWk,",
      "${c1}           ;:",
    ],
    logoColors: [[169, 172, 214]],
    // textColors: [[201, 204, 255],[255, 255, 255], [201, 204, 255], [201, 204, 255], [201, 204, 255]]
  },

  blankon: {
    art: [
      "${c2}        `./ohdNMMMMNmho+.` ${c1}       .+oo:`",
      "${c2}      -smMMMMMMMMMMMMMMMMmy-`    ${c1}`yyyyy+",
      "${c2}   `:dMMMMMMMMMMMMMMMMMMMMMMd/`  ${c1}`yyyyys",
      "${c2}  .hMMMMMMMNmhso/++symNMMMMMMMh- ${c1}`yyyyys",
      "${c2} -mMMMMMMms-`         -omMMMMMMN-${c1}.yyyyys",
      "${c2}.mMMMMMMy.              .yMMMMMMm:${c1}yyyyys",
      "${c2}sMMMMMMy                 `sMMMMMMh${c1}yyyyys",
      "${c2}NMMMMMN:                  .NMMMMMN${c1}yyyyys",
      "${c2}MMMMMMm.                   NMMMMMN${c1}yyyyys",
      "${c2}hMMMMMM+                  /MMMMMMN${c1}yyyyys",
      "${c2}:NMMMMMN:                :mMMMMMM+${c1}yyyyys",
      "${c2} oMMMMMMNs-            .sNMMMMMMs.${c1}yyyyys",
      "${c2}  +MMMMMMMNho:.`  `.:ohNMMMMMMNo ${c1}`yyyyys",
      "${c2}   -hMMMMMMMMNNNmmNNNMMMMMMMMh-  ${c1}`yyyyys",
      "${c2}     :yNMMMMMMMMMMMMMMMMMMNy:`   ${c1}`yyyyys",
      "${c2}       .:sdNMMMMMMMMMMNds/.      ${c1}`yyyyyo",
      "${c2}           `.::/++++/:.`           ${c1}:oys+.",
    ],
    logoColors: [
      [254, 0, 0],
      [255, 255, 255],
    ],
    textColors: [
      [254, 0, 0],
      [255, 255, 255],
      [255, 255, 255],
      [254, 0, 0],
      [254, 0, 0],
    ],
  },

  bluelight: {
    art: [
      "${c1}              oMMNMMMMMMMMMMMMMMMMMMMMMM",
      "${c1}              oMMMMMMMMMMMMMMMMMMMMMMMMM",
      "${c1}              oMMMMMMMMMMMMMMMMMMMMMMMMM",
      "${c1}              oMMMMMMMMMMMMMMMMMMMMMMMMM",
      "${c1}              -+++++++++++++++++++++++mM",
      "${c2}             ```````````````````````..${c1}dM${c2}",
      "${c2}           ```````````````````````....${c1}dM${c2}",
      "${c2}         ```````````````````````......${c1}dM${c2}",
      "${c2}       ```````````````````````........${c1}dM${c2}",
      "${c2}     ```````````````````````..........${c1}dM${c2}",
      "${c2}   ```````````````````````............${c1}dM${c2}",
      "${c2}.::::::::::::::::::::::-..............${c1}dM${c2}",
      "${c2} `-+yyyyyyyyyyyyyyyyyyyo............${c1}+mMM${c2}",
      "${c2}     -+yyyyyyyyyyyyyyyyo..........${c1}+mMMMM${c2}",
      "${c2}        ./syyyyyyyyyyyyo........${c1}+mMMMMMM${c2}",
      "${c2}           ./oyyyyyyyyyo......${c1}+mMMMMMMMM${c2}",
      "${c2}              omdyyyyyyo....${c1}+mMMMMMMMMMM${c2}",
      "${c2}              ${c1}oMMM${c2}mdhyyo..${c1}+mMMMMMMMMMMMM",
      "${c2}              oNNNNNNm${c2}dso${c1}mMMMMMMMMMMMMMM",
    ],
    logoColors: [
      [255, 255, 255],
      [59, 120, 255],
    ],
    textColors: [
      [59, 120, 255],
      [255, 255, 255],
      [59, 120, 255],
      [59, 120, 255],
      [59, 120, 255],
    ],
  },
};

import { UAParser } from "ua-parser-js";

const rgbAnsi = (r, g, b, isBackground = false) => `\u001B[${isBackground ? "48" : "38"};2;${r};${g};${b}m`;

const createColorbar = (width = 3, offset = 0, theme = null) => {
  const defaultColors = {
    standard: [
      [12, 12, 12], // Black
      [197, 15, 31], // Red
      [19, 161, 14], // Green
      [193, 156, 0], // Yellow
      [0, 55, 218], // Blue
      [136, 23, 152], // Purple
      [58, 150, 221], // Aqua
      [204, 204, 204], // White
    ],
    bright: [
      [118, 118, 118], // Gray
      [231, 72, 86], // Bright Red
      [22, 198, 12], // Bright Green
      [249, 241, 165], // Bright Yellow
      [59, 120, 255], // Bright Blue
      [180, 0, 158], // Bright Purple
      [97, 214, 214], // Bright Aqua
      [242, 242, 242], // Bright White
    ],
  };

  const themeColors = {
    monokai: {
      standard: [
        [39, 40, 34], // Black
        [249, 38, 114], // Red
        [166, 226, 46], // Green
        [244, 191, 117], // Yellow
        [102, 217, 239], // Blue
        [174, 129, 255], // Purple
        [161, 239, 228], // Aqua
        [248, 248, 242], // White
      ],
      bright: [
        [117, 113, 94], // Gray
        [249, 38, 114], // Bright Red
        [166, 226, 46], // Bright Green
        [244, 191, 117], // Bright Yellow
        [102, 217, 239], // Bright Blue
        [174, 129, 255], // Bright Purple
        [161, 239, 228], // Bright Aqua
        [249, 248, 245], // Bright White
      ],
    },
    dracula: {
      standard: [
        [40, 42, 54], // Black
        [255, 85, 85], // Red
        [80, 250, 123], // Green
        [241, 250, 140], // Yellow
        [98, 114, 164], // Blue
        [189, 147, 249], // Purple
        [139, 233, 253], // Aqua
        [248, 248, 242], // White
      ],
      bright: [
        [68, 71, 90], // Gray
        [255, 110, 110], // Bright Red
        [105, 255, 148], // Bright Green
        [241, 250, 140], // Bright Yellow
        [123, 139, 189], // Bright Blue
        [214, 172, 255], // Bright Purple
        [164, 255, 255], // Bright Aqua
        [255, 255, 255], // Bright White
      ],
    },
    solarized_dark: {
      standard: [
        [0, 43, 54], // Black
        [220, 50, 47], // Red
        [133, 153, 0], // Green
        [181, 137, 0], // Yellow
        [38, 139, 210], // Blue
        [108, 113, 196], // Purple
        [42, 161, 152], // Aqua
        [238, 232, 213], // White
      ],
      bright: [
        [88, 110, 117], // Gray
        [203, 75, 22], // Bright Red
        [147, 161, 161], // Bright Green
        [101, 123, 131], // Bright Yellow
        [131, 148, 150], // Bright Blue
        [108, 113, 196], // Bright Purple
        [147, 161, 161], // Bright Aqua
        [253, 246, 227], // Bright White
      ],
    },
    nord: {
      standard: [
        [46, 52, 64], // Black
        [191, 97, 106], // Red
        [163, 190, 140], // Green
        [235, 203, 139], // Yellow
        [129, 161, 193], // Blue
        [180, 142, 173], // Purple
        [136, 192, 208], // Aqua
        [229, 233, 240], // White
      ],
      bright: [
        [76, 86, 106], // Gray
        [191, 97, 106], // Bright Red
        [163, 190, 140], // Bright Green
        [235, 203, 139], // Bright Yellow
        [129, 161, 193], // Bright Blue
        [180, 142, 173], // Bright Purple
        [143, 188, 187], // Bright Aqua
        [236, 239, 244], // Bright White
      ],
    },
    onedark: {
      standard: [
        [40, 44, 52], // Black
        [224, 108, 117], // Red
        [152, 195, 121], // Green
        [229, 192, 123], // Yellow
        [97, 175, 239], // Blue
        [198, 120, 221], // Purple
        [86, 182, 194], // Aqua
        [171, 178, 191], // White
      ],
      bright: [
        [92, 99, 112], // Gray
        [224, 108, 117], // Bright Red
        [152, 195, 121], // Bright Green
        [229, 192, 123], // Bright Yellow
        [97, 175, 239], // Bright Blue
        [198, 120, 221], // Bright Purple
        [86, 182, 194], // Bright Aqua
        [200, 204, 212], // Bright White
      ],
    },
  };

  // Select colors based on theme
  const colors = theme && themeColors[theme] ? themeColors[theme] : defaultColors;

  // Create the colorbars using the selected colors
  return {
    standard: colors.standard.map(([r, g, b]) => rgbAnsi(r, g, b, true) + " ".repeat(width) + "\x1b[0m").join(""),

    bright: colors.bright.map(([r, g, b]) => rgbAnsi(r, g, b, true) + " ".repeat(width) + "\x1b[0m").join(""),
  };
};

const getColor = (userColors, defaultColors, index) => {
  // If user colors are specified, use the 256-color format
  if (userColors && userColors[index] !== undefined) {
    return `\x1b[38;5;${userColors[index]}m`;
  }

  // For default colors, use RGB format
  if (defaultColors && defaultColors[index]) {
    const [r, g, b] = defaultColors[index];
    return rgbAnsi(r, g, b);
  }
  // Fallback to white
  return rgbAnsi(255, 255, 255);
};

const formatHeader = (username, hostname, colors, defaultColors) => {
  const titleColor = getColor(colors, defaultColors, 0);
  const atColor = getColor(colors, defaultColors, 1);
  return `${titleColor}${username}\x1b[0m${atColor}@\x1b[0m${titleColor}${hostname}\x1b[0m`;
};

const formatInfoLine = (label, value, colors, defaultColors) => {
  const subtitleColor = getColor(colors, defaultColors, 3);
  const colonColor = getColor(colors, defaultColors, 4);
  const infoColor = getColor(colors, defaultColors, 5);
  return `${subtitleColor}${label}\x1b[0m${colonColor}:\x1b[0m ${infoColor}${value}\x1b[0m`;
};

// Function to parse user-provided colors
const parseUserColors = (colorString) => {
  if (!colorString) return null;
  return colorString.split(" ").map(Number);
};

const getLocalTimeInfo = () => {
  const now = new Date();
  const timeZone =
    Intl.DateTimeFormat("en-US", { timeZoneName: "long" })
      .formatToParts(now)
      .find((part) => part.type === "timeZoneName")?.value || "Unknown";

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  return {
    timeZone,
    localTime: now.toLocaleString(undefined, dateOptions),
  };
};

const getLocationInfo = async () => {
  try {
    const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await response.json();
    return {
      ip: data.ip,
      region: `${data.city}, ${data.region}`,
      country: data.country,
      latitude: data.latitude,
      longitude: data.longitude,
    };
  } catch {
    return {
      ip: "Unknown",
      region: "Unknown",
      country: "Unknown",
    };
  }
};

const formatLanguage = (langCode) => {
  const primary = langCode.split("-")[0];
  return LANGUAGE_NAMES[langCode] || LANGUAGE_NAMES[primary] || langCode;
};

const formatMinutes = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h${remainingMinutes ? ` ${remainingMinutes}min` : ""}`;
};

const getBatteryInfo = async () => {
  if ("getBattery" in navigator) {
    try {
      const battery = await navigator.getBattery();
      const percentage = Math.round(battery.level * 100);

      let statusText = "";
      if (battery.charging) {
        if (percentage === 100) {
          statusText = " (Plugged in)";
        } else if (battery.chargingTime !== Infinity) {
          const timeToCharge = Math.round(battery.chargingTime / 60);
          statusText = ` (${formatMinutes(timeToCharge)} to recharge)`;
        } else {
          statusText = " (Charging)";
        }
      } else {
        if (battery.dischargingTime !== Infinity) {
          const timeLeft = Math.round(battery.dischargingTime / 60);
          statusText = ` (${formatMinutes(timeLeft)} remaining)`;
        } else {
          statusText = " (Discharging)";
        }
      }

      return `${percentage}%${statusText}`;
    } catch {
      return "not available";
    }
  }
  return "not available";
};

const detectTheme = () => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "Dark";
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "Light";
  }
  return "Auto";
};

const getWeatherInfo = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code&forecast_days=1`);
    const data = await response.json();

    return {
      temperature: data.current.temperature_2m,
      feelsLike: data.current.apparent_temperature,
      weather: WEATHER_CODES[data.current.weather_code] || "Unknown",
    };
  } catch {
    return null;
  }
};

const formatTime = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayName = days[date.getDay()];
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return `${dayName} ${day} ${month} ${year} ${formattedHours}:${minutes} ${period}`;
};

export const parseNeofetchArgs = (commandArgs) => {
  const config = {
    userColors: null,
    header: null,
    firstRun: false,
    showColorBlocks: true,
    showLogo: true,
    showInfo: true,
    stdoutMode: false,
    customDistro: null,
    showUnderline: true,
    disabledFields: [],
    underlineChar: "-",
    separator: ":",
    colOffset: "auto",
    blockWidth: 3,
  };

  for (let i = 0; i < commandArgs.length; i++) {
    const arg = commandArgs[i];

    switch (arg) {
      case "--colors":
        if (i + 1 < commandArgs.length) {
          config.userColors = commandArgs.slice(i + 1).join(" ");
          i = commandArgs.length; // Skip remaining args as they are part of colors
        }
        break;

      case "--color_blocks":
        if (i + 1 < commandArgs.length) {
          config.showColorBlocks = commandArgs[i + 1].toLowerCase() !== "off";
          i++;
        }
        break;

      case "--ascii_distro":
        if (i + 1 < commandArgs.length) {
          config.customDistro = commandArgs[i + 1].toLowerCase();
          i++;
        }
        break;

      case "--underline":
        if (i + 1 < commandArgs.length) {
          config.showUnderline = commandArgs[i + 1].toLowerCase() !== "off";
          i++;
        }
        break;

      case "--underline_char":
        if (i + 1 < commandArgs.length) {
          config.underlineChar = commandArgs[i + 1][0] || "-";
          i++;
        }
        break;

      case "--separator":
        if (i + 1 < commandArgs.length) {
          config.separator = commandArgs[i + 1];
          i++;
        }
        break;

      case "--col_offset":
        if (i + 1 < commandArgs.length) {
          config.colOffset = commandArgs[i + 1];
          i++;
        }
        break;

      case "--block_width":
        if (i + 1 < commandArgs.length) {
          const width = parseInt(commandArgs[i + 1]);
          if (!isNaN(width) && width > 0) {
            config.blockWidth = width;
          }
          i++;
        }
        break;

      case "--disable":
        i++;
        while (i < commandArgs.length && !commandArgs[i].startsWith("--")) {
          config.disabledFields.push(commandArgs[i].toLowerCase());
          i++;
        }
        i--; // Adjust for the outer loop increment
        break;

      case "--off":
        config.showLogo = false;
        break;

      case "-L":
        config.showInfo = false;
        break;

      case "--stdout":
        config.stdoutMode = true;
        config.showLogo = false;
        config.showColorBlocks = false;
        break;
    }
  }

  return config;
};

const calculateRequiredWidth = (asciiConfig, info) => {
  const SPACING = 3;
  const maxAsciiWidth = Math.max(...asciiConfig.art.map((line) => line.replace(/\${c\d+}/g, "").length));
  const maxInfoWidth = Math.max(
    ...info.map((line) => {
      // Strip ANSI escape sequences for correct length calculation
      return line.replace(/\x1b\[[0-9;]*[mGK]/g, "").length;
    })
  );
  return maxAsciiWidth + SPACING + maxInfoWidth;
};

export const handleNeofetchCommand = async (commandArgs, header, firstRun, term, currentTheme, pageLoadTime) => {
  try {
    const config = parseNeofetchArgs(commandArgs);
    config.header = header;
    config.firstRun = firstRun;

    const cols = term.cols;

    const {
      output: fullOutput,
      noNewline,
      asciiConfig,
      info,
    } = await handleNeofetch(
      config.header,
      config.userColors,
      config.showColorBlocks,
      config.showLogo,
      config.showInfo,
      config.stdoutMode,
      config.customDistro,
      config.showUnderline,
      config.disabledFields,
      config.underlineChar,
      config.separator,
      config.colOffset,
      config.blockWidth,
      config.firstRun,
      true,
      currentTheme,
      pageLoadTime
    );

    const requiredWidth = calculateRequiredWidth(asciiConfig, info);

    // If terminal is too narrow, show only logo
    if (requiredWidth > cols && config.showLogo) {
      const logoOnlyOutput = await handleNeofetch(
        config.header,
        config.userColors,
        false, // No color blocks when showing logo only
        true, // Show logo
        false, // Don't show info
        config.stdoutMode,
        config.customDistro,
        config.showUnderline,
        config.disabledFields,
        config.underlineChar,
        config.separator,
        config.colOffset,
        config.blockWidth,
        config.firstRun,
        false,
        currentTheme
      );
      return { output: logoOnlyOutput.output, noNewline: false };
    }

    return { output: fullOutput, noNewline: false };
  } catch (error) {
    return {
      output: `Error running neofetch: ${error.message}`,
      noNewline: false,
    };
  }
};

const formatUptime = (millisec) => {
  const seconds = Math.floor(millisec / 1000);
  
  if (seconds < 60) {
    return `${seconds} seconds`;
  }
  
  const minutes = Math.floor(seconds / 60);
  const remainSec = seconds % 60;
  
  if (minutes < 60) {
    return `${minutes} min ${remainSec} sec`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainMin = minutes % 60;
  
  return `${hours} hr ${remainMin} min ${remainSec} sec`;
};

export const handleNeofetch = async (
  header,
  userColors,
  showColorBlocks = true,
  showLogo = true,
  showInfo = true,
  stdoutMode = false,
  customDistro,
  showUnderline = true,
  disabledFields,
  underlineChar,
  separator,
  colOffset,
  blockWidth,
  firstRun,
  returnAdditionalInfo = false,
  currentTheme = null,
  pageLoadTime
) => {
  const parser = new UAParser();
  const result = parser.getResult();
  const os = customDistro || result.os.name?.toLowerCase() || detectOS();

  // Validate if the requested distro exists in ASCII_ART
  const asciiConfig = customDistro ? ASCII_ART[customDistro] || ASCII_ART.windows : ASCII_ART[os] || ASCII_ART.linux;

  const parsedUserColors = parseUserColors(userColors);
  const defaultColors = asciiConfig.textColors;
  const logoColors = asciiConfig.logoColors;
  const SPACING = 3;

  const isFieldDisabled = (field) => {
    return disabledFields.includes(field.toLowerCase());
  };

  // Gather system info
  const batteryInfo = await getBatteryInfo();
  const { timeZone, localTime } = getLocalTimeInfo();
  const theme = detectTheme();
  const locationInfo = await getLocationInfo();
  const weatherInfo = locationInfo.ip !== "Unknown" ? await getWeatherInfo(locationInfo.latitude, locationInfo.longitude) : null;

  const [username, hostname] = header.split("@");

  // Create separator line
  const separatorWidth = 25;
  const separatorLine = stdoutMode ? underlineChar.repeat(separatorWidth) : `${getColor(parsedUserColors, defaultColors, 2)}${underlineChar.repeat(separatorWidth)}\x1b[0m`;

  const formattedHeader = stdoutMode ? `${username}@${hostname}` : formatHeader(username, hostname, parsedUserColors, defaultColors);

  // Define all possible system information fields
  const systemFields = [
    !isFieldDisabled("os") && ["OS", `${result.os.name} ${result.os.version || ""}`],
    !isFieldDisabled("browser") && ["Browser", `${result.browser.name} v${result.browser.version}`],
    !isFieldDisabled("engine") && ["Engine", `${result.engine.name} v${result.engine.version}`],
    !isFieldDisabled("appearance") && ["Appearance", theme],
    !isFieldDisabled("uptime") && ["Uptime", formatUptime(Date.now() - pageLoadTime)],
    !isFieldDisabled("ip") && ["IP Address", locationInfo.ip],
    !isFieldDisabled("region") && ["Region", locationInfo.region],
    !isFieldDisabled("resolution") && ["Resolution", `${window.screen.availWidth}x${window.screen.availHeight}`],
    !isFieldDisabled("pixel-ratio") && ["Pixel Ratio", window.devicePixelRatio],
    !isFieldDisabled("font") && ["Terminal Font", "Cascadia Mono NF"],
    !isFieldDisabled("time") && ["Time", formatTime(new Date())],
    !isFieldDisabled("timezone") && ["Timezone", timeZone],
    !isFieldDisabled("language") && ["Language", formatLanguage(navigator.language)],
  ].filter(Boolean);

  // Create info array with properly formatted text
  const info = showInfo
    ? [
        formattedHeader,
        // Only include separator line if showUnderline is true
        ...(showUnderline ? [separatorLine] : []),
        // Map system fields to formatted lines
        ...systemFields.map(([label, value]) => formatInfoLine(label, value, parsedUserColors, defaultColors)),
      ]
    : [];

  // Add battery info if available, enabled, and info display is enabled
  if (showInfo && batteryInfo !== "not available" && !isFieldDisabled("battery")) {
    info.push(formatInfoLine("Battery", batteryInfo, parsedUserColors, defaultColors));
  }

  // Add weather info if available, enabled, and info display is enabled
  if (showInfo && weatherInfo) {
    if (!isFieldDisabled("weather")) {
      info.push(formatInfoLine("Weather", weatherInfo.weather, parsedUserColors, defaultColors));
    }
    if (!isFieldDisabled("temperature")) {
      info.push(formatInfoLine("Temperature", `${weatherInfo.temperature}°C (${((weatherInfo.temperature * 9) / 5 + 32).toFixed(1)}°F)`, parsedUserColors, defaultColors));
    }
  }

  // Calculate offset for color blocks
  let actualColOffset = colOffset;
  if (colOffset === "auto") {
    actualColOffset = 0;
  } else {
    actualColOffset = parseInt(colOffset) || 0;
  }

  // Add color bars if enabled, info display is enabled, and not in stdout mode
  if (showInfo && showColorBlocks && !stdoutMode) {
    const COLORBAR = createColorbar(blockWidth, actualColOffset, currentTheme);
    const offsetSpaces = " ".repeat(actualColOffset);
    info.push("", offsetSpaces + COLORBAR.standard, offsetSpaces + COLORBAR.bright);
  }

  // If neither logo nor info should be shown, return empty output
  if (!showLogo && !showInfo) {
    return {
      output: "",
      noNewline: false,
    };
  }

  // If stdout mode or logo is disabled, return just the info
  if (stdoutMode || !showLogo) {
    return {
      output: ["", ...info, ""].join("\r\n"),
      noNewline: false,
    };
  }

  // Format output with the fixed spacing
  const maxAsciiWidth = Math.max(...asciiConfig.art.map((line) => line.replace(/\${c\d+}/g, "").length));
  const output = [];

  if (!firstRun) {
    output.push("");
  }

  // If only logo should be shown (no info)
  if (!showInfo) {
    asciiConfig.art.forEach((artLine) => {
      const coloredLine = artLine.replace(/\${c(\d+)}/g, (match, colorNum) => {
        const colorIndex = parseInt(colorNum) - 1;
        let color;
        try {
          color = logoColors[colorIndex];
        } catch {
          color = defaultColors[colorIndex];
        }
        const [r, g, b] = color;
        return rgbAnsi(r, g, b);
      });
      output.push(` ${coloredLine}`);
    });
  } else {
    // Show both logo and info
    for (let i = 0; i < Math.max(asciiConfig.art.length, info.length); i++) {
      let line = " "; // Initial space at start

      if (i < asciiConfig.art.length) {
        const artLine = asciiConfig.art[i];
        const coloredLine = artLine.replace(/\${c(\d+)}/g, (match, colorNum) => {
          const colorIndex = parseInt(colorNum) - 1;
          let color;
          try {
            color = logoColors[colorIndex];
          } catch {
            color = defaultColors[colorIndex];
          }
          const [r, g, b] = color;
          return rgbAnsi(r, g, b);
        });

        line += coloredLine;
        const visibleLength = artLine.replace(/\${c\d+}/g, "").length;
        line += " ".repeat(maxAsciiWidth - visibleLength + SPACING);
      } else {
        line += " ".repeat(maxAsciiWidth + SPACING);
      }
      if (i < info.length) {
        line += info[i];
      }
      output.push(line);
    }
  }

  output.push("");

  if (returnAdditionalInfo) {
    return {
      output: output.join("\r\n"),
      noNewline: false,
      asciiConfig,
      info,
    };
  }

  return {
    output: output.join("\r\n"),
    noNewline: false,
  };
};
