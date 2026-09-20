/**
 * Countries & Capitals Database
 * 
 * Extracted from 'Capitals of the world.docx'
 * Total countries: 199
 * 
 * To override any flag with a Wikipedia image link, simply update the 'flagUrl' property.
 * Example: flagUrl: "https://upload.wikimedia.org/wikipedia/commons/.../Flag_of_Example.svg"
 */
const countriesData = [
    {
        "id":  "albania",
        "country":  "Albania",
        "transcription":  "[ælˈbeɪniə]",
        "region":  "Europe",
        "capital":  "Tirana",
        "capitalTranscription":  "[tɪˈrɑːnə]",
        "demonym":  "Albanian",
        "iso2":  "al",
        "flagUrl":  "https://flagcdn.com/w320/al.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Албанія",
                                        "region":  "Європа",
                                        "capital":  "Тирана",
                                        "demonym":  "Албанці"
                                    }
                         }
    },
    {
        "id":  "andorra",
        "country":  "Andorra",
        "transcription":  "[ænˈdɔːrə]",
        "region":  "Europe",
        "capital":  "Andorra la Vella",
        "capitalTranscription":  "[la: 'velja:]",
        "demonym":  "Andorran",
        "iso2":  "ad",
        "flagUrl":  "https://flagcdn.com/w320/ad.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Андорра",
                                        "region":  "Європа",
                                        "capital":  "Андорра-ла-Велья",
                                        "demonym":  "Андоррці"
                                    }
                         }
    },
    {
        "id":  "austria",
        "country":  "Austria",
        "transcription":  "[ˈɒstriə]",
        "region":  "Europe",
        "capital":  "Vienna",
        "capitalTranscription":  "[vɪˈɛnə]",
        "demonym":  "Austrian",
        "iso2":  "at",
        "flagUrl":  "https://flagcdn.com/w320/at.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Австрія",
                                        "region":  "Європа",
                                        "capital":  "Відень",
                                        "demonym":  "Австрійці"
                                    }
                         }
    },
    {
        "id":  "belarus",
        "country":  "Belarus",
        "transcription":  "[ˌbeləˈruːs]",
        "region":  "Europe",
        "capital":  "Minsk",
        "capitalTranscription":  "[minsk]",
        "demonym":  "Belarusian",
        "iso2":  "by",
        "flagUrl":  "https://flagcdn.com/w320/by.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Білорусь",
                                        "region":  "Європа",
                                        "capital":  "Мінськ",
                                        "demonym":  "Білоруси"
                                    }
                         }
    },
    {
        "id":  "belgium",
        "country":  "Belgium",
        "transcription":  "[ˈbeldʒəm]",
        "region":  "Europe",
        "capital":  "Brussels",
        "capitalTranscription":  "[ˈbrʌsəlz]",
        "demonym":  "Belgian",
        "iso2":  "be",
        "flagUrl":  "https://flagcdn.com/w320/be.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Бельгія",
                                        "region":  "Європа",
                                        "capital":  "Брюссель",
                                        "demonym":  "Бельгійці"
                                    }
                         }
    },
    {
        "id":  "bosnia-and-herzegovina",
        "country":  "Bosnia and Herzegovina",
        "transcription":  "[bɒzˈnɪə əndhɜːtsɪgəˈviːnə, -gɔˈviːnə]",
        "region":  "Europe",
        "capital":  "Sarajevo",
        "capitalTranscription":  "[ˌsærəˈjeivou]",
        "demonym":  "Bosnian, Herzegovinian",
        "iso2":  "ba",
        "flagUrl":  "https://flagcdn.com/w320/ba.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Боснія і Герцеговина",
                                        "region":  "Європа",
                                        "capital":  "Сараєво",
                                        "demonym":  "Боснійці, герцеговинці"
                                    }
                         }
    },
    {
        "id":  "bulgaria",
        "country":  "Bulgaria",
        "transcription":  "[bʌlˈgeəriə]",
        "region":  "Europe",
        "capital":  "Sofia",
        "capitalTranscription":  "[ˈsəufiə]",
        "demonym":  "Bulgarian",
        "iso2":  "bg",
        "flagUrl":  "https://flagcdn.com/w320/bg.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Болгарія",
                                        "region":  "Європа",
                                        "capital":  "Софія",
                                        "demonym":  "Болгари"
                                    }
                         }
    },
    {
        "id":  "croatia",
        "country":  "Croatia",
        "transcription":  "[krəuˈeɪʃə]",
        "region":  "Europe",
        "capital":  "Zagreb",
        "capitalTranscription":  "[ˈzɑːgrɛb]",
        "demonym":  "Croatian, Croat",
        "iso2":  "hr",
        "flagUrl":  "https://flagcdn.com/w320/hr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Хорватія",
                                        "region":  "Європа",
                                        "capital":  "Загреб",
                                        "demonym":  "Хорвати"
                                    }
                         }
    },
    {
        "id":  "czech-republic",
        "country":  "Czech Republic",
        "transcription":  "[tʃɛk]",
        "region":  "Europe",
        "capital":  "Prague",
        "capitalTranscription":  "[prɑːg]",
        "demonym":  "Czech",
        "iso2":  "cz",
        "flagUrl":  "https://flagcdn.com/w320/cz.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Чехія",
                                        "region":  "Європа",
                                        "capital":  "Прага",
                                        "demonym":  "Чехи"
                                    }
                         }
    },
    {
        "id":  "denmark",
        "country":  "Denmark",
        "transcription":  "[ˈdenmɑːk]",
        "region":  "Europe",
        "capital":  "Copenhagen",
        "capitalTranscription":  "[ˌkoupənˈheigən]",
        "demonym":  "Dane",
        "iso2":  "dk",
        "flagUrl":  "https://flagcdn.com/w320/dk.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Данія",
                                        "region":  "Європа",
                                        "capital":  "Копенгаген",
                                        "demonym":  "Данці"
                                    }
                         }
    },
    {
        "id":  "estonia",
        "country":  "Estonia",
        "transcription":  "[iˈstouniə]",
        "region":  "Europe",
        "capital":  "Tallinn",
        "capitalTranscription":  "[ˈtalin]",
        "demonym":  "Estonian",
        "iso2":  "ee",
        "flagUrl":  "https://flagcdn.com/w320/ee.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Естонія",
                                        "region":  "Європа",
                                        "capital":  "Таллінн",
                                        "demonym":  "Естонці"
                                    }
                         }
    },
    {
        "id":  "finland",
        "country":  "Finland",
        "transcription":  "[ˈfɪnlənd]",
        "region":  "Europe",
        "capital":  "Helsinki",
        "capitalTranscription":  "[helˈsiŋki]",
        "demonym":  "Finn",
        "iso2":  "fi",
        "flagUrl":  "https://flagcdn.com/w320/fi.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Фінляндія",
                                        "region":  "Європа",
                                        "capital":  "Гельсінкі",
                                        "demonym":  "Фіни"
                                    }
                         }
    },
    {
        "id":  "france",
        "country":  "France",
        "transcription":  "[frɑːns, fræns]",
        "region":  "Europe",
        "capital":  "Paris",
        "capitalTranscription":  "[ˈpærɪs]",
        "demonym":  "Frenchman",
        "iso2":  "fr",
        "flagUrl":  "https://flagcdn.com/w320/fr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Франція",
                                        "region":  "Європа",
                                        "capital":  "Париж",
                                        "demonym":  "Французи"
                                    }
                         }
    },
    {
        "id":  "georgia",
        "country":  "Georgia",
        "transcription":  "[ˈdʒɔːdʒə]",
        "region":  "Europe",
        "capital":  "Tbilisi",
        "capitalTranscription":  "[ˌt(ə)biˈliːsi]",
        "demonym":  "Georgian",
        "iso2":  "ge",
        "flagUrl":  "https://flagcdn.com/w320/ge.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Грузія",
                                        "region":  "Європа",
                                        "capital":  "Тбілісі",
                                        "demonym":  "Грузини"
                                    }
                         }
    },
    {
        "id":  "germany",
        "country":  "Germany",
        "transcription":  "[ˈdʒɜːməni]",
        "region":  "Europe",
        "capital":  "Berlin",
        "capitalTranscription":  "[bəːˈlin]",
        "demonym":  "German",
        "iso2":  "de",
        "flagUrl":  "https://flagcdn.com/w320/de.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Німеччина",
                                        "region":  "Європа",
                                        "capital":  "Берлін",
                                        "demonym":  "Німці"
                                    }
                         }
    },
    {
        "id":  "greece",
        "country":  "Greece",
        "transcription":  "[griːs]",
        "region":  "Europe",
        "capital":  "Athens",
        "capitalTranscription":  "[ˈæθinz]",
        "demonym":  "Greek",
        "iso2":  "gr",
        "flagUrl":  "https://flagcdn.com/w320/gr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Греція",
                                        "region":  "Європа",
                                        "capital":  "Афіни",
                                        "demonym":  "Греки"
                                    }
                         }
    },
    {
        "id":  "hungary",
        "country":  "Hungary",
        "transcription":  "[ˈhʌŋgəri]",
        "region":  "Europe",
        "capital":  "Budapest",
        "capitalTranscription":  "[buːdəˈpɛst]",
        "demonym":  "Hungarian",
        "iso2":  "hu",
        "flagUrl":  "https://flagcdn.com/w320/hu.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Угорщина",
                                        "region":  "Європа",
                                        "capital":  "Будапешт",
                                        "demonym":  "Угорці"
                                    }
                         }
    },
    {
        "id":  "iceland",
        "country":  "Iceland",
        "transcription":  "[ˈaislənd]",
        "region":  "Europe",
        "capital":  "Reykjavik",
        "capitalTranscription":  "[ˈreikjəviːk]",
        "demonym":  "Icelander",
        "iso2":  "is",
        "flagUrl":  "https://flagcdn.com/w320/is.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ісландія",
                                        "region":  "Європа",
                                        "capital":  "Рейк'явік",
                                        "demonym":  "Ісландці"
                                    }
                         }
    },
    {
        "id":  "ireland",
        "country":  "Ireland",
        "transcription":  "[ˈaiələnd]",
        "region":  "Europe",
        "capital":  "Dublin",
        "capitalTranscription":  "[ˈdʌblin]",
        "demonym":  "Irish, Irishman",
        "iso2":  "ie",
        "flagUrl":  "https://flagcdn.com/w320/ie.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ірландія",
                                        "region":  "Європа",
                                        "capital":  "Дублін",
                                        "demonym":  "Ірландці"
                                    }
                         }
    },
    {
        "id":  "italy",
        "country":  "Italy",
        "transcription":  "[ˈɪtəli]",
        "region":  "Europe",
        "capital":  "Rome",
        "capitalTranscription":  "[roum]",
        "demonym":  "Italian",
        "iso2":  "it",
        "flagUrl":  "https://flagcdn.com/w320/it.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Італія",
                                        "region":  "Європа",
                                        "capital":  "Рим",
                                        "demonym":  "Італійці"
                                    }
                         }
    },
    {
        "id":  "latvia",
        "country":  "Latvia",
        "transcription":  "[ˈlætviə]",
        "region":  "Europe",
        "capital":  "Riga",
        "capitalTranscription":  "[ˈriːgə]",
        "demonym":  "Latvian",
        "iso2":  "lv",
        "flagUrl":  "https://flagcdn.com/w320/lv.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Латвія",
                                        "region":  "Європа",
                                        "capital":  "Рига",
                                        "demonym":  "Латвійці"
                                    }
                         }
    },
    {
        "id":  "liechtenstein",
        "country":  "Liechtenstein",
        "transcription":  "[ˈliktənstain]",
        "region":  "Europe",
        "capital":  "Vaduz",
        "capitalTranscription":  "[vaˈduts]",
        "demonym":  "Liechtensteiner",
        "iso2":  "li",
        "flagUrl":  "https://flagcdn.com/w320/li.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ліхтенштейн",
                                        "region":  "Європа",
                                        "capital":  "Вадуц",
                                        "demonym":  "Ліхтенштейнці"
                                    }
                         }
    },
    {
        "id":  "lithuania",
        "country":  "Lithuania",
        "transcription":  "[ˌlɪθ(j)u:ˈeiniə]",
        "region":  "Europe",
        "capital":  "Vilnius",
        "capitalTranscription":  "[ˈvilniəs]",
        "demonym":  "Lithuanian",
        "iso2":  "lt",
        "flagUrl":  "https://flagcdn.com/w320/lt.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Литва",
                                        "region":  "Європа",
                                        "capital":  "Вільнюс",
                                        "demonym":  "Литовці"
                                    }
                         }
    },
    {
        "id":  "luxembourg",
        "country":  "Luxembourg",
        "transcription":  "[ˈlʌksəmbɜːg]",
        "region":  "Europe",
        "capital":  "Luxembourg",
        "capitalTranscription":  "[ˈlʌksəmbɜːg]",
        "demonym":  "Luxembourger",
        "iso2":  "lu",
        "flagUrl":  "https://flagcdn.com/w320/lu.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Люксембург",
                                        "region":  "Європа",
                                        "capital":  "Люксембург",
                                        "demonym":  "Люксембуржці"
                                    }
                         }
    },
    {
        "id":  "north-macedonia",
        "country":  "North Macedonia",
        "transcription":  "[ˌmasiˈdouniə]",
        "region":  "Europe",
        "capital":  "Skopje",
        "capitalTranscription":  "[ˈskɔpjei]",
        "demonym":  "Macedonian",
        "iso2":  "mk",
        "flagUrl":  "https://flagcdn.com/w320/mk.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Північна Македонія",
                                        "region":  "Європа",
                                        "capital":  "Скоп'є",
                                        "demonym":  "Македонці"
                                    }
                         }
    },
    {
        "id":  "malta",
        "country":  "Malta",
        "transcription":  "[ˈmɔːltə]",
        "region":  "Europe",
        "capital":  "Valletta",
        "capitalTranscription":  "[vəˈlɛtə]",
        "demonym":  "Maltese",
        "iso2":  "mt",
        "flagUrl":  "https://flagcdn.com/w320/mt.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Мальта",
                                        "region":  "Європа",
                                        "capital":  "Валлетта",
                                        "demonym":  "Мальтійці"
                                    }
                         }
    },
    {
        "id":  "moldova",
        "country":  "Moldova",
        "transcription":  "[ˈmɒldəvə, mɒlˈdouvə]",
        "region":  "Europe",
        "capital":  "Chisinau",
        "capitalTranscription":  "[ˌkiʃiˈnau]",
        "demonym":  "Moldovan",
        "iso2":  "md",
        "flagUrl":  "https://flagcdn.com/w320/md.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Молдова",
                                        "region":  "Європа",
                                        "capital":  "Кишинів",
                                        "demonym":  "Молдовани"
                                    }
                         }
    },
    {
        "id":  "monaco",
        "country":  "Monaco",
        "transcription":  "[ˈmɒnəkou]",
        "region":  "Europe",
        "capital":  "Monaco",
        "capitalTranscription":  "[ˈmɒnəkou]",
        "demonym":  "Monacan",
        "iso2":  "mc",
        "flagUrl":  "https://flagcdn.com/w320/mc.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Монако",
                                        "region":  "Європа",
                                        "capital":  "Монако",
                                        "demonym":  "Монегаски"
                                    }
                         }
    },
    {
        "id":  "montenegro",
        "country":  "Montenegro",
        "transcription":  "[ˌmɒntiˈniːgrou]",
        "region":  "Europe",
        "capital":  "Podgorica",
        "capitalTranscription":  "[pɔdˈgɔːritsə]",
        "demonym":  "Montenegrin",
        "iso2":  "me",
        "flagUrl":  "https://flagcdn.com/w320/me.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Чорногорія",
                                        "region":  "Європа",
                                        "capital":  "Подгориця",
                                        "demonym":  "Чорногорці"
                                    }
                         }
    },
    {
        "id":  "netherlands",
        "country":  "Netherlands",
        "transcription":  "[ˈneðələndz]",
        "region":  "Europe",
        "capital":  "Amsterdam(official)",
        "capitalTranscription":  "[ˈæmstədæm, ˌæmstəˈdæm]The Hague (administrative) [heig]",
        "demonym":  "Dutchman, Netherlander",
        "iso2":  "nl",
        "flagUrl":  "https://flagcdn.com/w320/nl.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Нідерланди",
                                        "region":  "Європа",
                                        "capital":  "Амстердам",
                                        "demonym":  "Нідерландці (голландці)"
                                    }
                         }
    },
    {
        "id":  "norway",
        "country":  "Norway",
        "transcription":  "[ˈnɔːwei]",
        "region":  "Europe",
        "capital":  "Oslo",
        "capitalTranscription":  "[ˈɔzlou]",
        "demonym":  "Norwegian",
        "iso2":  "no",
        "flagUrl":  "https://flagcdn.com/w320/no.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Норвегія",
                                        "region":  "Європа",
                                        "capital":  "Осло",
                                        "demonym":  "Норвежці"
                                    }
                         }
    },
    {
        "id":  "poland",
        "country":  "Poland",
        "transcription":  "[ˈpoulənd]",
        "region":  "Europe",
        "capital":  "Warsaw",
        "capitalTranscription":  "[ˈwɔːsɔː]",
        "demonym":  "Pole",
        "iso2":  "pl",
        "flagUrl":  "https://flagcdn.com/w320/pl.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Польща",
                                        "region":  "Європа",
                                        "capital":  "Варшава",
                                        "demonym":  "Поляки"
                                    }
                         }
    },
    {
        "id":  "portugal",
        "country":  "Portugal",
        "transcription":  "[ˈpɔːtʃəgəl]",
        "region":  "Europe",
        "capital":  "Lisbon",
        "capitalTranscription":  "[ˈlizbən]",
        "demonym":  "Portuguese",
        "iso2":  "pt",
        "flagUrl":  "https://flagcdn.com/w320/pt.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Португалія",
                                        "region":  "Європа",
                                        "capital":  "Лісабон",
                                        "demonym":  "Португальці"
                                    }
                         }
    },
    {
        "id":  "romania",
        "country":  "Romania",
        "transcription":  "[rouˈmeiniə]",
        "region":  "Europe",
        "capital":  "Bucharest",
        "capitalTranscription":  "[ˌbuːkəˈrest]",
        "demonym":  "Romanian",
        "iso2":  "ro",
        "flagUrl":  "https://flagcdn.com/w320/ro.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Румунія",
                                        "region":  "Європа",
                                        "capital":  "Бухарест",
                                        "demonym":  "Румуни"
                                    }
                         }
    },
    {
        "id":  "russian-federation",
        "country":  "Russian Federation",
        "transcription":  "[ˈrʌʃən]",
        "region":  "Europe",
        "capital":  "Moscow",
        "capitalTranscription":  "[ˈmɔskou]",
        "demonym":  "Russian",
        "iso2":  "ru",
        "flagUrl":  "https://flagcdn.com/w320/ru.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Російська Федерація",
                                        "region":  "Європа",
                                        "capital":  "Москва",
                                        "demonym":  "Росіяни"
                                    }
                         }
    },
    {
        "id":  "san-marino",
        "country":  "San Marino",
        "transcription":  "[ˌsænməˈriːnou]",
        "region":  "Europe",
        "capital":  "San Marino",
        "capitalTranscription":  "[ˌsænməˈriːnou]",
        "demonym":  "Sammarinese",
        "iso2":  "sm",
        "flagUrl":  "https://flagcdn.com/w320/sm.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сан-Марино",
                                        "region":  "Європа",
                                        "capital":  "Сан-Марино",
                                        "demonym":  "Санмаринці"
                                    }
                         }
    },
    {
        "id":  "serbia",
        "country":  "Serbia",
        "transcription":  "[ˈsɜːbiə]",
        "region":  "Europe",
        "capital":  "Belgrade",
        "capitalTranscription":  "[belˈgreid]",
        "demonym":  "Serb",
        "iso2":  "rs",
        "flagUrl":  "https://flagcdn.com/w320/rs.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сербія",
                                        "region":  "Європа",
                                        "capital":  "Белград",
                                        "demonym":  "Серби"
                                    }
                         }
    },
    {
        "id":  "slovakia",
        "country":  "Slovakia",
        "transcription":  "[sləˈvækiə]",
        "region":  "Europe",
        "capital":  "Bratislava",
        "capitalTranscription":  "[ˌbratiˈslɑːvə]",
        "demonym":  "Slovak",
        "iso2":  "sk",
        "flagUrl":  "https://flagcdn.com/w320/sk.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Словаччина",
                                        "region":  "Європа",
                                        "capital":  "Братислава",
                                        "demonym":  "Словаки"
                                    }
                         }
    },
    {
        "id":  "slovenia",
        "country":  "Slovenia",
        "transcription":  "[sləˈviːniə]",
        "region":  "Europe",
        "capital":  "Ljubljana",
        "capitalTranscription":  "[ljuːˈbljɑːnə]",
        "demonym":  "Slovene",
        "iso2":  "si",
        "flagUrl":  "https://flagcdn.com/w320/si.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Словенія",
                                        "region":  "Європа",
                                        "capital":  "Любляна",
                                        "demonym":  "Словенці"
                                    }
                         }
    },
    {
        "id":  "spain",
        "country":  "Spain",
        "transcription":  "[spein]",
        "region":  "Europe",
        "capital":  "Madrid",
        "capitalTranscription":  "[məˈdrid]",
        "demonym":  "Spaniard",
        "iso2":  "es",
        "flagUrl":  "https://flagcdn.com/w320/es.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Іспанія",
                                        "region":  "Європа",
                                        "capital":  "Мадрид",
                                        "demonym":  "Іспанці"
                                    }
                         }
    },
    {
        "id":  "sweden",
        "country":  "Sweden",
        "transcription":  "[ˈswiːdn]",
        "region":  "Europe",
        "capital":  "Stockholm",
        "capitalTranscription":  "[ˈstɔkhoum]",
        "demonym":  "Swede",
        "iso2":  "se",
        "flagUrl":  "https://flagcdn.com/w320/se.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Швеція",
                                        "region":  "Європа",
                                        "capital":  "Стокгольм",
                                        "demonym":  "Шведи"
                                    }
                         }
    },
    {
        "id":  "switzerland",
        "country":  "Switzerland",
        "transcription":  "[ˈswitsələnd]",
        "region":  "Europe",
        "capital":  "Bern",
        "capitalTranscription":  "[bəːn]",
        "demonym":  "Swiss",
        "iso2":  "ch",
        "flagUrl":  "https://flagcdn.com/w320/ch.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Швейцарія",
                                        "region":  "Європа",
                                        "capital":  "Берн",
                                        "demonym":  "Швейцарці"
                                    }
                         }
    },
    {
        "id":  "united-kingdom-great-britain",
        "country":  "United Kingdom/Great Britain",
        "transcription":  "[juːˌnaɪtɪd ˈkɪŋdəm]",
        "region":  "Europe",
        "capital":  "London",
        "capitalTranscription":  "[ˈlʌndən]",
        "demonym":  "British",
        "iso2":  "gb",
        "flagUrl":  "https://flagcdn.com/w320/gb.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Велика Британія",
                                        "region":  "Європа",
                                        "capital":  "Лондон",
                                        "demonym":  "Британці"
                                    }
                         }
    },
    {
        "id":  "england",
        "country":  "England",
        "transcription":  "[ˈiŋglənd]",
        "region":  "Europe",
        "capital":  "London",
        "capitalTranscription":  "[ˈlʌndən]",
        "demonym":  "Englishman",
        "iso2":  "gb-eng",
        "flagUrl":  "https://flagcdn.com/w320/gb-eng.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Англія",
                                        "region":  "Європа",
                                        "capital":  "Лондон",
                                        "demonym":  "Англійці"
                                    }
                         }
    },
    {
        "id":  "scotland",
        "country":  "Scotland",
        "transcription":  "[ˈskɔtlənd]",
        "region":  "Europe",
        "capital":  "Edinburgh",
        "capitalTranscription":  "[ˈedinbərə]",
        "demonym":  "Scot, Scotsman",
        "iso2":  "gb-sct",
        "flagUrl":  "https://flagcdn.com/w320/gb-sct.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Шотландія",
                                        "region":  "Європа",
                                        "capital":  "Единбург",
                                        "demonym":  "Шотландці"
                                    }
                         }
    },
    {
        "id":  "wales",
        "country":  "Wales",
        "transcription":  "[weilz]",
        "region":  "Europe",
        "capital":  "Cardiff",
        "capitalTranscription":  "[ˈkɑːdif]",
        "demonym":  "Welshman",
        "iso2":  "gb-wls",
        "flagUrl":  "https://flagcdn.com/w320/gb-wls.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Уельс",
                                        "region":  "Європа",
                                        "capital":  "Кардіфф",
                                        "demonym":  "Валлійці"
                                    }
                         }
    },
    {
        "id":  "northern-ireland",
        "country":  "Northern Ireland",
        "transcription":  "[ˌnɔːðən ˈʌiələnd]",
        "region":  "Europe",
        "capital":  "Belfast",
        "capitalTranscription":  "[ˌbelˈfɑːst, ˈbelfæst]",
        "demonym":  "Irishman",
        "iso2":  "gb-nir",
        "flagUrl":  "https://flagcdn.com/w320/gb-nir.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Північна Ірландія",
                                        "region":  "Європа",
                                        "capital":  "Белфаст",
                                        "demonym":  "Північноірландці"
                                    }
                         }
    },
    {
        "id":  "ukraine",
        "country":  "Ukraine",
        "transcription":  "[juːˈkrein]",
        "region":  "Europe",
        "capital":  "Kyiv",
        "capitalTranscription":  "[ˈkɪjiu̯]",
        "demonym":  "Ukrainian",
        "iso2":  "ua",
        "flagUrl":  "https://flagcdn.com/w320/ua.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Україна",
                                        "region":  "Європа",
                                        "capital":  "Київ",
                                        "demonym":  "Українці"
                                    }
                         }
    },
    {
        "id":  "vatican-city",
        "country":  "Vatican City",
        "transcription":  "[ˈvætikən]",
        "region":  "Europe",
        "capital":  "Vatican City",
        "capitalTranscription":  "[ˈvætɪkən ˈsɪti]",
        "demonym":  "Vatican citizen",
        "iso2":  "va",
        "flagUrl":  "https://flagcdn.com/w320/va.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ватикан",
                                        "region":  "Європа",
                                        "capital":  "Ватикан (в межах Рима)",
                                        "demonym":  "Громадяни Ватикану"
                                    }
                         }
    },
    {
        "id":  "afghanistan",
        "country":  "Afghanistan",
        "transcription":  "[æf’gænistɑːn, -‘stæn]",
        "region":  "Asia",
        "capital":  "Kabul",
        "capitalTranscription":  "[ˈkɑːbul]",
        "demonym":  "Afghan",
        "iso2":  "af",
        "flagUrl":  "https://flagcdn.com/w320/af.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Афганістан",
                                        "region":  "Азія",
                                        "capital":  "Кабул",
                                        "demonym":  "Афганці"
                                    }
                         }
    },
    {
        "id":  "armenia",
        "country":  "Armenia",
        "transcription":  "[ɑːˈmiːniə]",
        "region":  "Asia",
        "capital":  "Yerevan",
        "capitalTranscription":  "[ˌjeriˈvæn]",
        "demonym":  "Armenian",
        "iso2":  "am",
        "flagUrl":  "https://flagcdn.com/w320/am.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Вірменія",
                                        "region":  "Азія",
                                        "capital":  "Єреван",
                                        "demonym":  "Вірмени"
                                    }
                         }
    },
    {
        "id":  "azerbaijan",
        "country":  "Azerbaijan",
        "transcription":  "[ˌæzəbaiˈdʒɑːn]",
        "region":  "Asia",
        "capital":  "Baku",
        "capitalTranscription":  "[bæˈkuː]",
        "demonym":  "Azerbaijani",
        "iso2":  "az",
        "flagUrl":  "https://flagcdn.com/w320/az.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Азербайджан",
                                        "region":  "Азія",
                                        "capital":  "Баку",
                                        "demonym":  "Азербайджанці"
                                    }
                         }
    },
    {
        "id":  "bahrain",
        "country":  "Bahrain",
        "transcription":  "[bɑːˈrein]",
        "region":  "Asia",
        "capital":  "Manama",
        "capitalTranscription":  "[məˈnɑːmə]",
        "demonym":  "Bahraini",
        "iso2":  "bh",
        "flagUrl":  "https://flagcdn.com/w320/bh.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Бахрейн",
                                        "region":  "Азія",
                                        "capital":  "Манама",
                                        "demonym":  "Бахрейнці"
                                    }
                         }
    },
    {
        "id":  "bangladesh",
        "country":  "Bangladesh",
        "transcription":  "[ˌbæŋgləˈdeʃ]",
        "region":  "Asia",
        "capital":  "Dhaka",
        "capitalTranscription":  "[ˈdækə]",
        "demonym":  "Bangladeshi",
        "iso2":  "bd",
        "flagUrl":  "https://flagcdn.com/w320/bd.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Бангладеш",
                                        "region":  "Азія",
                                        "capital":  "Дакка",
                                        "demonym":  "Бангладешці"
                                    }
                         }
    },
    {
        "id":  "bhutan",
        "country":  "Bhutan",
        "transcription":  "[buːˈtɑːn]",
        "region":  "Asia",
        "capital":  "Thimphu",
        "capitalTranscription":  "[ˈtimpuː, ˈθim-]",
        "demonym":  "Bhutanese",
        "iso2":  "bt",
        "flagUrl":  "https://flagcdn.com/w320/bt.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Бутан",
                                        "region":  "Азія",
                                        "capital":  "Тхімпху",
                                        "demonym":  "Бутанці"
                                    }
                         }
    },
    {
        "id":  "brunei",
        "country":  "Brunei",
        "transcription":  "[bruːˈnai]",
        "region":  "Asia",
        "capital":  "Bandar Seri Begawan",
        "capitalTranscription":  "[ˌbændə ˌseribəˈgɑːwən]",
        "demonym":  "Bruneian",
        "iso2":  "bn",
        "flagUrl":  "https://flagcdn.com/w320/bn.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Бруней",
                                        "region":  "Азія",
                                        "capital":  "Бандар-Сері-Бегаван",
                                        "demonym":  "Брунейці"
                                    }
                         }
    },
    {
        "id":  "cambodia",
        "country":  "Cambodia",
        "transcription":  "[kæmˈboudiə]",
        "region":  "Asia",
        "capital":  "Phnom Penh",
        "capitalTranscription":  "[nɔm ˈpen]",
        "demonym":  "Cambodian",
        "iso2":  "kh",
        "flagUrl":  "https://flagcdn.com/w320/kh.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Камбоджа",
                                        "region":  "Азія",
                                        "capital":  "Пномпень",
                                        "demonym":  "Камбоджійці"
                                    }
                         }
    },
    {
        "id":  "china",
        "country":  "China",
        "transcription":  "[ˈtʃainə]",
        "region":  "Asia",
        "capital":  "Beijing",
        "capitalTranscription":  "[beiˈdʒiŋ]",
        "demonym":  "Chinese",
        "iso2":  "cn",
        "flagUrl":  "https://flagcdn.com/w320/cn.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Китай",
                                        "region":  "Азія",
                                        "capital":  "Пекін",
                                        "demonym":  "Китайці"
                                    }
                         }
    },
    {
        "id":  "cyprus",
        "country":  "Cyprus",
        "transcription":  "[ˈsaiprəs]",
        "region":  "Asia",
        "capital":  "Nicosia",
        "capitalTranscription":  "[ˌnikəˈsiə]",
        "demonym":  "Cypriot [ˈsipriət]",
        "iso2":  "cy",
        "flagUrl":  "https://flagcdn.com/w320/cy.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Кіпр",
                                        "region":  "Азія",
                                        "capital":  "Нікосія",
                                        "demonym":  "Кіпріоти"
                                    }
                         }
    },
    {
        "id":  "india",
        "country":  "India",
        "transcription":  "[ˈindiə]",
        "region":  "Asia",
        "capital":  "New Delhi",
        "capitalTranscription":  "[ˈdeli]",
        "demonym":  "Indian",
        "iso2":  "in",
        "flagUrl":  "https://flagcdn.com/w320/in.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Індія",
                                        "region":  "Азія",
                                        "capital":  "Нью-Делі",
                                        "demonym":  "Індійці"
                                    }
                         }
    },
    {
        "id":  "indonesia",
        "country":  "Indonesia",
        "transcription":  "[ˌindəˈniːziə, -ˈniːʒə]",
        "region":  "Asia",
        "capital":  "Jakarta",
        "capitalTranscription":  "[dʒəˈkɑːtə], Nusantara [nusanˈtara]",
        "demonym":  "Indonesian",
        "iso2":  "id",
        "flagUrl":  "https://flagcdn.com/w320/id.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Індонезія",
                                        "region":  "Азія",
                                        "capital":  "Джакарта",
                                        "demonym":  "Індонезійці"
                                    }
                         }
    },
    {
        "id":  "iran",
        "country":  "Iran",
        "transcription":  "[iˈrɑːn, -æn]",
        "region":  "Asia",
        "capital":  "Tehran",
        "capitalTranscription":  "[teːˈrɑːn, -ræn]",
        "demonym":  "Iranian",
        "iso2":  "ir",
        "flagUrl":  "https://flagcdn.com/w320/ir.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Іран",
                                        "region":  "Азія",
                                        "capital":  "Тегеран",
                                        "demonym":  "Іранці"
                                    }
                         }
    },
    {
        "id":  "iraq",
        "country":  "Iraq",
        "transcription":  "[iˈrɑːk. -æk]",
        "region":  "Asia",
        "capital":  "Baghdad",
        "capitalTranscription":  "[bægˈdæd]",
        "demonym":  "Iraqi",
        "iso2":  "iq",
        "flagUrl":  "https://flagcdn.com/w320/iq.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ірак",
                                        "region":  "Азія",
                                        "capital":  "Багдад",
                                        "demonym":  "Іракці"
                                    }
                         }
    },
    {
        "id":  "israel",
        "country":  "Israel",
        "transcription":  "[ˈizreiəl]",
        "region":  "Asia",
        "capital":  "Jerusalem (according to Israel)",
        "capitalTranscription":  "[dʒəˈruːsələm], Tel-Aviv (according to the UN) [teləˈviːv]",
        "demonym":  "Israeli [izˈreili]",
        "iso2":  "il",
        "flagUrl":  "https://flagcdn.com/w320/il.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ізраїль",
                                        "region":  "Азія",
                                        "capital":  "Єрусалим",
                                        "demonym":  "Ізраїльтяни"
                                    }
                         }
    },
    {
        "id":  "japan",
        "country":  "Japan",
        "transcription":  "[dʒəˈpæn]",
        "region":  "Asia",
        "capital":  "Tokyo",
        "capitalTranscription":  "[ˈtoukiou]",
        "demonym":  "Japanese",
        "iso2":  "jp",
        "flagUrl":  "https://flagcdn.com/w320/jp.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Японія",
                                        "region":  "Азія",
                                        "capital":  "Токіо",
                                        "demonym":  "Японці"
                                    }
                         }
    },
    {
        "id":  "jordan",
        "country":  "Jordan",
        "transcription":  "[ˈdʒɔːdən]",
        "region":  "Asia",
        "capital":  "Amman",
        "capitalTranscription":  "[əˈmɑːn]",
        "demonym":  "Jordanian",
        "iso2":  "jo",
        "flagUrl":  "https://flagcdn.com/w320/jo.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Йорданія",
                                        "region":  "Азія",
                                        "capital":  "Амман",
                                        "demonym":  "Йорданці"
                                    }
                         }
    },
    {
        "id":  "kazakhstan",
        "country":  "Kazakhstan",
        "transcription":  "[ˌkazəkˈstaːn, -‘stæn]",
        "region":  "Asia",
        "capital":  "Astana",
        "capitalTranscription":  "[əˈstɑːnə]",
        "demonym":  "Kazakh [ˈkazak, kəˈzak]",
        "iso2":  "kz",
        "flagUrl":  "https://flagcdn.com/w320/kz.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Казахстан",
                                        "region":  "Азія",
                                        "capital":  "Астана",
                                        "demonym":  "Казахи"
                                    }
                         }
    },
    {
        "id":  "north-korea",
        "country":  "North Korea",
        "transcription":  "[kəˈriːə]",
        "region":  "Asia",
        "capital":  "Pyongyang",
        "capitalTranscription":  "[pjɔŋˈjæŋ]",
        "demonym":  "Korean",
        "iso2":  "kp",
        "flagUrl":  "https://flagcdn.com/w320/kp.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Північна Корея",
                                        "region":  "Азія",
                                        "capital":  "Пхеньян",
                                        "demonym":  "Корейці"
                                    }
                         }
    },
    {
        "id":  "south-korea",
        "country":  "South Korea",
        "transcription":  "[ˌsaʊθ kəˈriːə]",
        "region":  "Asia",
        "capital":  "Seoul",
        "capitalTranscription":  "[soul]",
        "demonym":  "Korean",
        "iso2":  "kr",
        "flagUrl":  "https://flagcdn.com/w320/kr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Південна Корея",
                                        "region":  "Азія",
                                        "capital":  "Сеул",
                                        "demonym":  "Корейці"
                                    }
                         }
    },
    {
        "id":  "kuwait",
        "country":  "Kuwait",
        "transcription":  "[kuˈweit]",
        "region":  "Asia",
        "capital":  "Kuwait City",
        "capitalTranscription":  "[kuˈweit]",
        "demonym":  "Kuwaiti",
        "iso2":  "kw",
        "flagUrl":  "https://flagcdn.com/w320/kw.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Кувейт",
                                        "region":  "Азія",
                                        "capital":  "Ель-Кувейт",
                                        "demonym":  "Кувейтці"
                                    }
                         }
    },
    {
        "id":  "kyrgyzstan",
        "country":  "Kyrgyzstan",
        "transcription":  "[ˌkəːgiˈstɑːn, -‘stæn]",
        "region":  "Asia",
        "capital":  "Bishkek",
        "capitalTranscription":  "[biʃ’kek]",
        "demonym":  "Kyrgyz [kiəˈgiːz]",
        "iso2":  "kg",
        "flagUrl":  "https://flagcdn.com/w320/kg.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Киргизстан",
                                        "region":  "Азія",
                                        "capital":  "Бішкек",
                                        "demonym":  "Киргизи"
                                    }
                         }
    },
    {
        "id":  "laos",
        "country":  "Laos",
        "transcription":  "[laus]",
        "region":  "Asia",
        "capital":  "Vientiane",
        "capitalTranscription":  "[ˌvjenˈtjɑːn]",
        "demonym":  "Laotian [leiˈouʃən]",
        "iso2":  "la",
        "flagUrl":  "https://flagcdn.com/w320/la.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Лаос",
                                        "region":  "Азія",
                                        "capital":  "В'єнтьян",
                                        "demonym":  "Лаосці"
                                    }
                         }
    },
    {
        "id":  "lebanon",
        "country":  "Lebanon",
        "transcription":  "[ˈlebənən]",
        "region":  "Asia",
        "capital":  "Beirut",
        "capitalTranscription":  "[beiˈruːt]",
        "demonym":  "Lebanese",
        "iso2":  "lb",
        "flagUrl":  "https://flagcdn.com/w320/lb.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ліван",
                                        "region":  "Азія",
                                        "capital":  "Бейрут",
                                        "demonym":  "Ліванці"
                                    }
                         }
    },
    {
        "id":  "malaysia",
        "country":  "Malaysia",
        "transcription":  "[məˈleiziə, -ʒə]",
        "region":  "Asia",
        "capital":  "Kuala Lumpur",
        "capitalTranscription":  "[ˌkwɑːlə ˈlumpuə]",
        "demonym":  "Malaysian",
        "iso2":  "my",
        "flagUrl":  "https://flagcdn.com/w320/my.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Малайзія",
                                        "region":  "Азія",
                                        "capital":  "Куала-Лумпур",
                                        "demonym":  "Малайзійці"
                                    }
                         }
    },
    {
        "id":  "maldives",
        "country":  "Maldives",
        "transcription":  "[ˈmɔːldiːvz, -daivz]",
        "region":  "Asia",
        "capital":  "Male",
        "capitalTranscription":  "[ˈmɑːlei]",
        "demonym":  "Maldivian",
        "iso2":  "mv",
        "flagUrl":  "https://flagcdn.com/w320/mv.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Мальдіви",
                                        "region":  "Азія",
                                        "capital":  "Мале",
                                        "demonym":  "Мальдівці"
                                    }
                         }
    },
    {
        "id":  "mongolia",
        "country":  "Mongolia",
        "transcription":  "[mɒŋˈgouliə]",
        "region":  "Asia",
        "capital":  "Ulaanbaatar",
        "capitalTranscription":  "[ˌuːlɑːnˈbɑːtə]",
        "demonym":  "Mongolian",
        "iso2":  "mn",
        "flagUrl":  "https://flagcdn.com/w320/mn.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Монголія",
                                        "region":  "Азія",
                                        "capital":  "Улан-Батор",
                                        "demonym":  "Монголи"
                                    }
                         }
    },
    {
        "id":  "myanmar",
        "country":  "Myanmar",
        "transcription":  "[ˈmjænmɑː, mjanˈmɑː]",
        "region":  "Asia",
        "capital":  "Naypyidaw",
        "capitalTranscription":  "[ˈneipjiːˌdɔː]",
        "demonym":  "Myanma",
        "iso2":  "mm",
        "flagUrl":  "https://flagcdn.com/w320/mm.png",
        "translations":  {
                             "uk":  {
                                        "country":  "М'янма",
                                        "region":  "Азія",
                                        "capital":  "Найп'їдо",
                                        "demonym":  "М'янманці"
                                    }
                         }
    },
    {
        "id":  "nepal",
        "country":  "Nepal",
        "transcription":  "[niˈpɔːl]",
        "region":  "Asia",
        "capital":  "Kathmandu",
        "capitalTranscription":  "[ˌkætmænˈduː]",
        "demonym":  "Nepalese",
        "iso2":  "np",
        "flagUrl":  "https://flagcdn.com/w320/np.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Непал",
                                        "region":  "Азія",
                                        "capital":  "Катманду",
                                        "demonym":  "Непальці"
                                    }
                         }
    },
    {
        "id":  "oman",
        "country":  "Oman",
        "transcription":  "[ouˈmɑːn]",
        "region":  "Asia",
        "capital":  "Muscat",
        "capitalTranscription":  "[ˈmʌskæt]",
        "demonym":  "Omani",
        "iso2":  "om",
        "flagUrl":  "https://flagcdn.com/w320/om.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Оман",
                                        "region":  "Азія",
                                        "capital":  "Маскат",
                                        "demonym":  "Оманці"
                                    }
                         }
    },
    {
        "id":  "pakistan",
        "country":  "Pakistan",
        "transcription":  "[ˌpɑːkiˈstɑːn, ˌpækiˈstæn]",
        "region":  "Asia",
        "capital":  "Islamabad",
        "capitalTranscription":  "[izˈlɑːməbæd, is-]",
        "demonym":  "Pakistani",
        "iso2":  "pk",
        "flagUrl":  "https://flagcdn.com/w320/pk.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Пакистан",
                                        "region":  "Азія",
                                        "capital":  "Ісламабад",
                                        "demonym":  "Пакистанці"
                                    }
                         }
    },
    {
        "id":  "philippines",
        "country":  "Philippines",
        "transcription":  "[ˈfilipiːnz, fili’piːnz]",
        "region":  "Asia",
        "capital":  "Manila",
        "capitalTranscription":  "[məˈnilə]",
        "demonym":  "Filipino",
        "iso2":  "ph",
        "flagUrl":  "https://flagcdn.com/w320/ph.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Філіппіни",
                                        "region":  "Азія",
                                        "capital":  "Маніла",
                                        "demonym":  "Філіппінці"
                                    }
                         }
    },
    {
        "id":  "qatar",
        "country":  "Qatar",
        "transcription":  "[ˈkɑːtər, kʌˈtɑː]",
        "region":  "Asia",
        "capital":  "Doha",
        "capitalTranscription":  "[ˈdouhɑː]",
        "demonym":  "Qatari",
        "iso2":  "qa",
        "flagUrl":  "https://flagcdn.com/w320/qa.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Катар",
                                        "region":  "Азія",
                                        "capital":  "Доха",
                                        "demonym":  "Катарці"
                                    }
                         }
    },
    {
        "id":  "saudi-arabia",
        "country":  "Saudi Arabia",
        "transcription":  "[ˌsaudi, -sɔ; əˈreibiə]",
        "region":  "Asia",
        "capital":  "Riyadh",
        "capitalTranscription":  "[ˈriːad]",
        "demonym":  "Saudi Arabian",
        "iso2":  "sa",
        "flagUrl":  "https://flagcdn.com/w320/sa.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Саудівська Аравія",
                                        "region":  "Азія",
                                        "capital":  "Ер-Ріяд",
                                        "demonym":  "Саудівці"
                                    }
                         }
    },
    {
        "id":  "singapore",
        "country":  "Singapore",
        "transcription":  "[ˈsiŋgəpɔː, ˌsiŋəˈpɔː]",
        "region":  "Asia",
        "capital":  "Singapore",
        "capitalTranscription":  "[ˈsiŋgəpɔː, ˌsiŋəˈpɔː]",
        "demonym":  "Singaporean",
        "iso2":  "sg",
        "flagUrl":  "https://flagcdn.com/w320/sg.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сінгапур",
                                        "region":  "Азія",
                                        "capital":  "Сінгапур",
                                        "demonym":  "Сінгапурці"
                                    }
                         }
    },
    {
        "id":  "sri-lanka",
        "country":  "Sri Lanka",
        "transcription":  "[sriː ˈlæŋkə, ʃri-]",
        "region":  "Asia",
        "capital":  "Colombo",
        "capitalTranscription":  "[kəˈlʌmbou]",
        "demonym":  "Sri Lankan",
        "iso2":  "lk",
        "flagUrl":  "https://flagcdn.com/w320/lk.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Шрі-Ланка",
                                        "region":  "Азія",
                                        "capital":  "Коломбо",
                                        "demonym":  "Шрі-ланкійці"
                                    }
                         }
    },
    {
        "id":  "syria",
        "country":  "Syria",
        "transcription":  "[ˈsiriə]",
        "region":  "Asia",
        "capital":  "Damascus",
        "capitalTranscription":  "[dəˈmɑːskəs, -mæskəs]",
        "demonym":  "Syrian",
        "iso2":  "sy",
        "flagUrl":  "https://flagcdn.com/w320/sy.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сирія",
                                        "region":  "Азія",
                                        "capital":  "Дамаск",
                                        "demonym":  "Сирійці"
                                    }
                         }
    },
    {
        "id":  "taiwan",
        "country":  "Taiwan",
        "transcription":  "[taiˈwɑːn]",
        "region":  "Asia",
        "capital":  "Taipei",
        "capitalTranscription":  "[tʌiˈpei]",
        "demonym":  "Taiwanese",
        "iso2":  "tw",
        "flagUrl":  "https://flagcdn.com/w320/tw.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Тайвань",
                                        "region":  "Азія",
                                        "capital":  "Тайбей",
                                        "demonym":  "Тайванці"
                                    }
                         }
    },
    {
        "id":  "tajikistan",
        "country":  "Tajikistan",
        "transcription":  "[tɑːˌdʒiːkiˈstɑːn,-‘stæn]",
        "region":  "Asia",
        "capital":  "Dushanbe",
        "capitalTranscription":  "[duːˈʃænbei]",
        "demonym":  "Tajik [tɑːˈdʒiːk]",
        "iso2":  "tj",
        "flagUrl":  "https://flagcdn.com/w320/tj.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Таджикистан",
                                        "region":  "Азія",
                                        "capital":  "Душанбе",
                                        "demonym":  "Таджики"
                                    }
                         }
    },
    {
        "id":  "thailand",
        "country":  "Thailand",
        "transcription":  "[ˈtailænd, -lənd]",
        "region":  "Asia",
        "capital":  "Bangkok",
        "capitalTranscription":  "[bæŋˈkɔk]",
        "demonym":  "Thai",
        "iso2":  "th",
        "flagUrl":  "https://flagcdn.com/w320/th.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Таїланд",
                                        "region":  "Азія",
                                        "capital":  "Бангкок",
                                        "demonym":  "Таїландці"
                                    }
                         }
    },
    {
        "id":  "timor-leste",
        "country":  "Timor-Leste",
        "transcription":  "[tiːˌmɔː ˈleʃtei]",
        "region":  "Asia",
        "capital":  "Dili",
        "capitalTranscription":  "[ˈdiːli]",
        "demonym":  "East Timorese",
        "iso2":  "tl",
        "flagUrl":  "https://flagcdn.com/w320/tl.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Східний Тимор",
                                        "region":  "Азія",
                                        "capital":  "Ділі",
                                        "demonym":  "Східні тиморці"
                                    }
                         }
    },
    {
        "id":  "turkey",
        "country":  "Turkey",
        "transcription":  "[ˈtɜːki]",
        "region":  "Asia",
        "capital":  "Ankara",
        "capitalTranscription":  "[ˈæŋkərə]",
        "demonym":  "Turk",
        "iso2":  "tr",
        "flagUrl":  "https://flagcdn.com/w320/tr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Туреччина",
                                        "region":  "Азія",
                                        "capital":  "Анкара",
                                        "demonym":  "Турки"
                                    }
                         }
    },
    {
        "id":  "turkmenistan",
        "country":  "Turkmenistan",
        "transcription":  "[tɜːkmeniˈstɑːn, -‘stæn]",
        "region":  "Asia",
        "capital":  "Ashgabat",
        "capitalTranscription":  "[ˈæʃgəbæt]",
        "demonym":  "Turkmen",
        "iso2":  "tm",
        "flagUrl":  "https://flagcdn.com/w320/tm.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Туркменістан",
                                        "region":  "Азія",
                                        "capital":  "Ашгабат",
                                        "demonym":  "Туркмени"
                                    }
                         }
    },
    {
        "id":  "united-arab-emirates",
        "country":  "United Arab Emirates",
        "transcription":  "[ˈemirəts]",
        "region":  "Asia",
        "capital":  "Abu Dhabi",
        "capitalTranscription":  "[ˌæbuː ˈdɑːbi]",
        "demonym":  "Emirati",
        "iso2":  "ae",
        "flagUrl":  "https://flagcdn.com/w320/ae.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Об'єднані Арабські Емірати",
                                        "region":  "Азія",
                                        "capital":  "Абу-Дабі",
                                        "demonym":  "Еміратці"
                                    }
                         }
    },
    {
        "id":  "uzbekistan",
        "country":  "Uzbekistan",
        "transcription":  "[uzbekiˈstɑːn, ʌz-, -‘stæn]",
        "region":  "Asia",
        "capital":  "Tashkent",
        "capitalTranscription":  "[tæʃˈkent]",
        "demonym":  "Uzbek [ˈuzbek]",
        "iso2":  "uz",
        "flagUrl":  "https://flagcdn.com/w320/uz.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Узбекистан",
                                        "region":  "Азія",
                                        "capital":  "Ташкент",
                                        "demonym":  "Узбеки"
                                    }
                         }
    },
    {
        "id":  "vietnam",
        "country":  "Vietnam",
        "transcription":  "[vjetˈnæm, -ˈnɑːm]",
        "region":  "Asia",
        "capital":  "Hanoi",
        "capitalTranscription":  "[hæˈnɔi]",
        "demonym":  "Vietnamese",
        "iso2":  "vn",
        "flagUrl":  "https://flagcdn.com/w320/vn.png",
        "translations":  {
                             "uk":  {
                                        "country":  "В'єтнам",
                                        "region":  "Азія",
                                        "capital":  "Ханой",
                                        "demonym":  "В'єтнамці"
                                    }
                         }
    },
    {
        "id":  "yemen",
        "country":  "Yemen",
        "transcription":  "[ˈjemən]",
        "region":  "Asia",
        "capital":  "Sana’a",
        "capitalTranscription":  "[saˈnɑ, ˈsæːnə]",
        "demonym":  "Yemeni",
        "iso2":  "ye",
        "flagUrl":  "https://flagcdn.com/w320/ye.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ємен",
                                        "region":  "Азія",
                                        "capital":  "Сана",
                                        "demonym":  "Єменці"
                                    }
                         }
    },
    {
        "id":  "algeria",
        "country":  "Algeria",
        "transcription":  "[ælˈdʒiriə]",
        "region":  "Africa",
        "capital":  "Algiers",
        "capitalTranscription":  "[alˈdʒiəz]",
        "demonym":  "Algerian",
        "iso2":  "dz",
        "flagUrl":  "https://flagcdn.com/w320/dz.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Алжир",
                                        "region":  "Африка",
                                        "capital":  "Алжир",
                                        "demonym":  "Алжирці"
                                    }
                         }
    },
    {
        "id":  "angola",
        "country":  "Angola",
        "transcription":  "[æŋˈgoulə]",
        "region":  "Africa",
        "capital":  "Luanda",
        "capitalTranscription":  "[luˈændə]",
        "demonym":  "Angolan",
        "iso2":  "ao",
        "flagUrl":  "https://flagcdn.com/w320/ao.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ангола",
                                        "region":  "Африка",
                                        "capital":  "Луанда",
                                        "demonym":  "Ангольці"
                                    }
                         }
    },
    {
        "id":  "benin",
        "country":  "Benin",
        "transcription":  "[beˈniːn]",
        "region":  "Africa",
        "capital":  "Porto-Novo (official)",
        "capitalTranscription":  "[ˌpɔːtəu ˈnouvou], Cotonou (de facto) [ˌkɒtəˈnuː]",
        "demonym":  "Beninese",
        "iso2":  "bj",
        "flagUrl":  "https://flagcdn.com/w320/bj.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Бенін",
                                        "region":  "Африка",
                                        "capital":  "Порто-Ново",
                                        "demonym":  "Бенінці"
                                    }
                         }
    },
    {
        "id":  "botswana",
        "country":  "Botswana",
        "transcription":  "[bɒtˈswɑːnə]",
        "region":  "Africa",
        "capital":  "Gaborone",
        "capitalTranscription":  "[ˌgæbəˈrouni]",
        "demonym":  "Motswana (singular), Batswana (plural)",
        "iso2":  "bw",
        "flagUrl":  "https://flagcdn.com/w320/bw.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ботсвана",
                                        "region":  "Африка",
                                        "capital":  "Габороне",
                                        "demonym":  "Ботсванці"
                                    }
                         }
    },
    {
        "id":  "burkina-faso",
        "country":  "Burkina Faso",
        "transcription":  "[bəːˌkiːnə ˈfasou]",
        "region":  "Africa",
        "capital":  "Ouagadougou",
        "capitalTranscription":  "[ˌwɑːgəˈduːguː]",
        "demonym":  "Burkinabe",
        "iso2":  "bf",
        "flagUrl":  "https://flagcdn.com/w320/bf.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Буркіна-Фасо",
                                        "region":  "Африка",
                                        "capital":  "Уагадугу",
                                        "demonym":  "Буркінійці"
                                    }
                         }
    },
    {
        "id":  "burundi",
        "country":  "Burundi",
        "transcription":  "[buˈrundi]",
        "region":  "Africa",
        "capital":  "Bujumbura",
        "capitalTranscription":  "[ˌbuːdʒəmˈbuərə]",
        "demonym":  "Burundian",
        "iso2":  "bi",
        "flagUrl":  "https://flagcdn.com/w320/bi.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Бурунді",
                                        "region":  "Африка",
                                        "capital":  "Бужумбура",
                                        "demonym":  "Бурундійці"
                                    }
                         }
    },
    {
        "id":  "cabo-verde",
        "country":  "Cabo Verde",
        "transcription":  "[kɑbouˈvəːd]",
        "region":  "Africa",
        "capital":  "Praia",
        "capitalTranscription":  "[ˈprʌiə]",
        "demonym":  "Cabo Verdean",
        "iso2":  "cv",
        "flagUrl":  "https://flagcdn.com/w320/cv.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Кабо-Верде",
                                        "region":  "Африка",
                                        "capital":  "Прая",
                                        "demonym":  "Кабовердійці"
                                    }
                         }
    },
    {
        "id":  "cameroon",
        "country":  "Cameroon",
        "transcription":  "[ˌkæməˈruːn]",
        "region":  "Africa",
        "capital":  "Yaoundé",
        "capitalTranscription":  "[jæˈoundei]",
        "demonym":  "Cameroonian",
        "iso2":  "cm",
        "flagUrl":  "https://flagcdn.com/w320/cm.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Камерун",
                                        "region":  "Африка",
                                        "capital":  "Яунде",
                                        "demonym":  "Камерунці"
                                    }
                         }
    },
    {
        "id":  "central-african-republic",
        "country":  "Central African Republic",
        "transcription":  "[ˌsɛntrəl ˈæfrɪkən rɪˈpʌblɪk]",
        "region":  "Africa",
        "capital":  "Bangui",
        "capitalTranscription":  "[ˈbæŋgiː]",
        "demonym":  "Central African",
        "iso2":  "cf",
        "flagUrl":  "https://flagcdn.com/w320/cf.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Центральноафриканська Республіка",
                                        "region":  "Африка",
                                        "capital":  "Бангі",
                                        "demonym":  "Центральноафриканці"
                                    }
                         }
    },
    {
        "id":  "chad",
        "country":  "Chad",
        "transcription":  "[tʃæd]",
        "region":  "Africa",
        "capital":  "N’Djamena",
        "capitalTranscription":  "[ˌ(ə)ndʒæˈmeinə]",
        "demonym":  "Chadian",
        "iso2":  "td",
        "flagUrl":  "https://flagcdn.com/w320/td.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Чад",
                                        "region":  "Африка",
                                        "capital":  "Нджамена",
                                        "demonym":  "Чадці"
                                    }
                         }
    },
    {
        "id":  "comoros",
        "country":  "Comoros",
        "transcription":  "[ˈkɒmərouz]",
        "region":  "Africa",
        "capital":  "Moroni",
        "capitalTranscription":  "[məˈrouni]",
        "demonym":  "Comorian",
        "iso2":  "km",
        "flagUrl":  "https://flagcdn.com/w320/km.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Коморські Острови",
                                        "region":  "Африка",
                                        "capital":  "Мороні",
                                        "demonym":  "Коморці"
                                    }
                         }
    },
    {
        "id":  "c-te-d-ivoire",
        "country":  "Côte d’Ivoire",
        "transcription":  "[kout diːˈvwɑː]",
        "region":  "Africa",
        "capital":  "Yamoussoukro (political)",
        "capitalTranscription":  "[ˌjæmuːˈsuːkrou], Abidjan(economic) [ˌæbiˈdʒɑːn]",
        "demonym":  "Ivorian, Ivoirian",
        "iso2":  "ci",
        "flagUrl":  "https://flagcdn.com/w320/ci.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Кот-д'Івуар",
                                        "region":  "Африка",
                                        "capital":  "Ямусукро",
                                        "demonym":  "Івуарійці"
                                    }
                         }
    },
    {
        "id":  "republic-of-the-congo",
        "country":  "Republic of the Congo",
        "transcription":  "[rɪˈpʌblɪk əv ðə ˈkɒŋɡəʊ]",
        "region":  "Africa",
        "capital":  "Brazzaville",
        "capitalTranscription":  "[ˈbrazəvil]",
        "demonym":  "Congolese",
        "iso2":  "cg",
        "flagUrl":  "https://flagcdn.com/w320/cg.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Республіка Конго",
                                        "region":  "Африка",
                                        "capital":  "Браззавіль",
                                        "demonym":  "Конголезці"
                                    }
                         }
    },
    {
        "id":  "democratic-republic-of-the-congo",
        "country":  "Democratic Republic of the Congo",
        "transcription":  "[ˌdɛməˈkrætɪk rɪˈpʌblɪk əv ðə ˈkɒŋɡəʊ]",
        "region":  "Africa",
        "capital":  "Kinshasa",
        "capitalTranscription":  "[kinˈʃɑːsə, -zə]",
        "demonym":  "Congolese",
        "iso2":  "cd",
        "flagUrl":  "https://flagcdn.com/w320/cd.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Демократична Республіка Конго",
                                        "region":  "Африка",
                                        "capital":  "Кіншаса",
                                        "demonym":  "Конголезці"
                                    }
                         }
    },
    {
        "id":  "djibouti",
        "country":  "Djibouti",
        "transcription":  "[dʒiˈbuːti]",
        "region":  "Africa",
        "capital":  "Djibouti",
        "capitalTranscription":  "[dʒiˈbuːti]",
        "demonym":  "Djiboutian",
        "iso2":  "dj",
        "flagUrl":  "https://flagcdn.com/w320/dj.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Джибуті",
                                        "region":  "Африка",
                                        "capital":  "Джибуті",
                                        "demonym":  "Джибутійці"
                                    }
                         }
    },
    {
        "id":  "egypt",
        "country":  "Egypt",
        "transcription":  "[ˈiːdʒipt]",
        "region":  "Africa",
        "capital":  "Cairo",
        "capitalTranscription":  "[ˈkaiərou]",
        "demonym":  "Egyptian",
        "iso2":  "eg",
        "flagUrl":  "https://flagcdn.com/w320/eg.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Єгипет",
                                        "region":  "Африка",
                                        "capital":  "Каїр",
                                        "demonym":  "Єгиптяни"
                                    }
                         }
    },
    {
        "id":  "equatorial-guinea",
        "country":  "Equatorial Guinea",
        "transcription":  "[ekwəˌtɔːriəl ˈgini]",
        "region":  "Africa",
        "capital":  "Malabo",
        "capitalTranscription":  "[məˈlɑːbou]",
        "demonym":  "Equatorial Guinean, Equatoguinean",
        "iso2":  "gq",
        "flagUrl":  "https://flagcdn.com/w320/gq.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Екваторіальна Гвінея",
                                        "region":  "Африка",
                                        "capital":  "Малабо",
                                        "demonym":  "Екваторіальні гвінейці"
                                    }
                         }
    },
    {
        "id":  "eritrea",
        "country":  "Eritrea",
        "transcription":  "[ˌeriˈtreiə]",
        "region":  "Africa",
        "capital":  "Asmara",
        "capitalTranscription":  "[æsˈmɑːrə]",
        "demonym":  "Eritrean",
        "iso2":  "er",
        "flagUrl":  "https://flagcdn.com/w320/er.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Еритрея",
                                        "region":  "Африка",
                                        "capital":  "Асмера",
                                        "demonym":  "Еритрейці"
                                    }
                         }
    },
    {
        "id":  "ethiopia",
        "country":  "Ethiopia",
        "transcription":  "[ˌiːθiˈoupiə]",
        "region":  "Africa",
        "capital":  "Addis Ababa",
        "capitalTranscription":  "[ˌædis ˈæbəbə]",
        "demonym":  "Ethiopian",
        "iso2":  "et",
        "flagUrl":  "https://flagcdn.com/w320/et.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ефіопія",
                                        "region":  "Африка",
                                        "capital":  "Аддис-Абеба",
                                        "demonym":  "Ефіопи"
                                    }
                         }
    },
    {
        "id":  "gabon",
        "country":  "Gabon",
        "transcription":  "[gəˈbɒn]",
        "region":  "Africa",
        "capital":  "Libreville",
        "capitalTranscription":  "[ˈliːbrəvil]",
        "demonym":  "Gabonese",
        "iso2":  "ga",
        "flagUrl":  "https://flagcdn.com/w320/ga.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Габон",
                                        "region":  "Африка",
                                        "capital":  "Лібревіль",
                                        "demonym":  "Габонці"
                                    }
                         }
    },
    {
        "id":  "republic-of-the-gambia",
        "country":  "Republic of The Gambia",
        "transcription":  "[ˈgæmbiə]",
        "region":  "Africa",
        "capital":  "Banjul",
        "capitalTranscription":  "[banˈdʒuːl]",
        "demonym":  "Gambian",
        "iso2":  "gm",
        "flagUrl":  "https://flagcdn.com/w320/gm.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Гамбія",
                                        "region":  "Африка",
                                        "capital":  "Банжул",
                                        "demonym":  "Гамбійці"
                                    }
                         }
    },
    {
        "id":  "ghana",
        "country":  "Ghana",
        "transcription":  "[ˈgɑːnə]",
        "region":  "Africa",
        "capital":  "Accra",
        "capitalTranscription":  "[əˈkrɑː]",
        "demonym":  "Ghanaian",
        "iso2":  "gh",
        "flagUrl":  "https://flagcdn.com/w320/gh.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Гана",
                                        "region":  "Африка",
                                        "capital":  "Аккра",
                                        "demonym":  "Ганці"
                                    }
                         }
    },
    {
        "id":  "guinea",
        "country":  "Guinea",
        "transcription":  "[ˈgini]",
        "region":  "Africa",
        "capital":  "Conakry",
        "capitalTranscription":  "[ˈkɒnəkri]",
        "demonym":  "Guinean",
        "iso2":  "gn",
        "flagUrl":  "https://flagcdn.com/w320/gn.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Гвінея",
                                        "region":  "Африка",
                                        "capital":  "Конакрі",
                                        "demonym":  "Гвінейці"
                                    }
                         }
    },
    {
        "id":  "guinea-bissau",
        "country":  "Guinea-Bissau",
        "transcription":  "[ˌginibiˈsau]",
        "region":  "Africa",
        "capital":  "Bissau",
        "capitalTranscription":  "[biˈsau]",
        "demonym":  "Bissau-Guinean",
        "iso2":  "gw",
        "flagUrl":  "https://flagcdn.com/w320/gw.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Гвінея-Бісау",
                                        "region":  "Африка",
                                        "capital":  "Бісау",
                                        "demonym":  "Гвінейці Бісау"
                                    }
                         }
    },
    {
        "id":  "kenya",
        "country":  "Kenya",
        "transcription":  "[ˈkenjə]",
        "region":  "Africa",
        "capital":  "Nairobi",
        "capitalTranscription":  "[naiˈroubi]",
        "demonym":  "Kenyan",
        "iso2":  "ke",
        "flagUrl":  "https://flagcdn.com/w320/ke.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Кенія",
                                        "region":  "Африка",
                                        "capital":  "Найробі",
                                        "demonym":  "Кенійці"
                                    }
                         }
    },
    {
        "id":  "lesotho",
        "country":  "Lesotho",
        "transcription":  "[ləˈsuːtuː]",
        "region":  "Africa",
        "capital":  "Maseru",
        "capitalTranscription":  "[məˈseːruː]",
        "demonym":  "Mosotho (singular), Basotho (plural)",
        "iso2":  "ls",
        "flagUrl":  "https://flagcdn.com/w320/ls.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Лесото",
                                        "region":  "Африка",
                                        "capital":  "Масеру",
                                        "demonym":  "Басото"
                                    }
                         }
    },
    {
        "id":  "liberia",
        "country":  "Liberia",
        "transcription":  "[lʌiˈbiəriə]",
        "region":  "Africa",
        "capital":  "Monrovia",
        "capitalTranscription":  "[mɒnˈrouviə]",
        "demonym":  "Liberian",
        "iso2":  "lr",
        "flagUrl":  "https://flagcdn.com/w320/lr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ліберія",
                                        "region":  "Африка",
                                        "capital":  "Монровія",
                                        "demonym":  "Ліберійці"
                                    }
                         }
    },
    {
        "id":  "libya",
        "country":  "Libya",
        "transcription":  "[ˈlibiə]",
        "region":  "Africa",
        "capital":  "Tripoli",
        "capitalTranscription":  "[ˈtripəli]",
        "demonym":  "Libyan",
        "iso2":  "ly",
        "flagUrl":  "https://flagcdn.com/w320/ly.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Лівія",
                                        "region":  "Африка",
                                        "capital":  "Тріполі",
                                        "demonym":  "Лівійці"
                                    }
                         }
    },
    {
        "id":  "madagascar",
        "country":  "Madagascar",
        "transcription":  "[ˌmædəˈgæskə]",
        "region":  "Africa",
        "capital":  "Antananarivo",
        "capitalTranscription":  "[ˌantəˌnanəˈriːvou]",
        "demonym":  "Madagascan",
        "iso2":  "mg",
        "flagUrl":  "https://flagcdn.com/w320/mg.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Мадагаскар",
                                        "region":  "Африка",
                                        "capital":  "Антананаріву",
                                        "demonym":  "Мадагаскарці"
                                    }
                         }
    },
    {
        "id":  "malawi",
        "country":  "Malawi",
        "transcription":  "[məˈlɑːwi]",
        "region":  "Africa",
        "capital":  "Lilongwe",
        "capitalTranscription":  "[liˈlɒŋwei]",
        "demonym":  "Malawian",
        "iso2":  "mw",
        "flagUrl":  "https://flagcdn.com/w320/mw.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Малаві",
                                        "region":  "Африка",
                                        "capital":  "Лілонгве",
                                        "demonym":  "Малавійці"
                                    }
                         }
    },
    {
        "id":  "mali",
        "country":  "Mali",
        "transcription":  "[ˈmɑːli]",
        "region":  "Africa",
        "capital":  "Bamako",
        "capitalTranscription":  "[ˈbæməkou]",
        "demonym":  "Malian",
        "iso2":  "ml",
        "flagUrl":  "https://flagcdn.com/w320/ml.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Малі",
                                        "region":  "Африка",
                                        "capital":  "Бамако",
                                        "demonym":  "Малійці"
                                    }
                         }
    },
    {
        "id":  "mauritania",
        "country":  "Mauritania",
        "transcription":  "[ˌmɒriˈteiniə]",
        "region":  "Africa",
        "capital":  "Nouakchott",
        "capitalTranscription":  "[nwækˈʃɒt]",
        "demonym":  "Mauritanian",
        "iso2":  "mr",
        "flagUrl":  "https://flagcdn.com/w320/mr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Мавританія",
                                        "region":  "Африка",
                                        "capital":  "Нуакшот",
                                        "demonym":  "Мавританці"
                                    }
                         }
    },
    {
        "id":  "mauritius",
        "country":  "Mauritius",
        "transcription":  "[məˈriʃəs]",
        "region":  "Africa",
        "capital":  "Port Louis",
        "capitalTranscription":  "[ˈluːis, luːi]",
        "demonym":  "Mauritian",
        "iso2":  "mu",
        "flagUrl":  "https://flagcdn.com/w320/mu.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Маврикій",
                                        "region":  "Африка",
                                        "capital":  "Порт-Луї",
                                        "demonym":  "Маврикійці"
                                    }
                         }
    },
    {
        "id":  "morocco",
        "country":  "Morocco",
        "transcription":  "[məˈrɒkou]",
        "region":  "Africa",
        "capital":  "Rabat",
        "capitalTranscription":  "[rəˈbæt]",
        "demonym":  "Moroccan",
        "iso2":  "ma",
        "flagUrl":  "https://flagcdn.com/w320/ma.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Марокко",
                                        "region":  "Африка",
                                        "capital":  "Рабат",
                                        "demonym":  "Марокканці"
                                    }
                         }
    },
    {
        "id":  "mozambique",
        "country":  "Mozambique",
        "transcription":  "[mouzəmˈbiːk]",
        "region":  "Africa",
        "capital":  "Maputo",
        "capitalTranscription":  "[məˈpuːtou]",
        "demonym":  "Mozambican",
        "iso2":  "mz",
        "flagUrl":  "https://flagcdn.com/w320/mz.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Мозамбік",
                                        "region":  "Африка",
                                        "capital":  "Мапуту",
                                        "demonym":  "Мозамбікці"
                                    }
                         }
    },
    {
        "id":  "namibia",
        "country":  "Namibia",
        "transcription":  "[nəˈmibiə]",
        "region":  "Africa",
        "capital":  "Windhoek",
        "capitalTranscription":  "[ˈwinthuk]",
        "demonym":  "Namibian",
        "iso2":  "na",
        "flagUrl":  "https://flagcdn.com/w320/na.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Намібія",
                                        "region":  "Африка",
                                        "capital":  "Віндгук",
                                        "demonym":  "Намібійці"
                                    }
                         }
    },
    {
        "id":  "niger",
        "country":  "Niger",
        "transcription":  "[ˈnaidʒər, niːˈʒeə]",
        "region":  "Africa",
        "capital":  "Niamey",
        "capitalTranscription":  "[njɑːˈmei]",
        "demonym":  "Nigerien",
        "iso2":  "ne",
        "flagUrl":  "https://flagcdn.com/w320/ne.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Нігер",
                                        "region":  "Африка",
                                        "capital":  "Ніамей",
                                        "demonym":  "Нігерці"
                                    }
                         }
    },
    {
        "id":  "nigeria",
        "country":  "Nigeria",
        "transcription":  "[naiˈdʒiəriə]",
        "region":  "Africa",
        "capital":  "Abuja",
        "capitalTranscription":  "[əˈbuːdʒə]",
        "demonym":  "Nigerian",
        "iso2":  "ng",
        "flagUrl":  "https://flagcdn.com/w320/ng.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Нігерія",
                                        "region":  "Африка",
                                        "capital":  "Абуджа",
                                        "demonym":  "Нігерійці"
                                    }
                         }
    },
    {
        "id":  "rwanda",
        "country":  "Rwanda",
        "transcription":  "[ruːˈændə]",
        "region":  "Africa",
        "capital":  "Kigali",
        "capitalTranscription":  "[kiˈgɑːli]",
        "demonym":  "Rwandan",
        "iso2":  "rw",
        "flagUrl":  "https://flagcdn.com/w320/rw.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Руанда",
                                        "region":  "Африка",
                                        "capital":  "Кігалі",
                                        "demonym":  "Руандійці"
                                    }
                         }
    },
    {
        "id":  "sao-tome-and-principe",
        "country":  "Sao Tome and Principe",
        "transcription":  "[sautɒˈmeiˈprinsipei]",
        "region":  "Africa",
        "capital":  "Sao Tome",
        "capitalTranscription":  "[sautɒˈmei]",
        "demonym":  "Sao Tomean",
        "iso2":  "st",
        "flagUrl":  "https://flagcdn.com/w320/st.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сан-Томе і Прінсіпі",
                                        "region":  "Африка",
                                        "capital":  "Сан-Томе",
                                        "demonym":  "Сантомійці"
                                    }
                         }
    },
    {
        "id":  "senegal",
        "country":  "Senegal",
        "transcription":  "[ˌseniˈgɔːl]",
        "region":  "Africa",
        "capital":  "Dakar",
        "capitalTranscription":  "[ˈdækə]",
        "demonym":  "Senegalese",
        "iso2":  "sn",
        "flagUrl":  "https://flagcdn.com/w320/sn.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сенегал",
                                        "region":  "Африка",
                                        "capital":  "Дакар",
                                        "demonym":  "Сенегальці"
                                    }
                         }
    },
    {
        "id":  "seychelles",
        "country":  "Seychelles",
        "transcription":  "[seiˈʃelz, -ʃel]",
        "region":  "Africa",
        "capital":  "Victoria",
        "capitalTranscription":  "[vikˈtɔːriə]",
        "demonym":  "Seychellois",
        "iso2":  "sc",
        "flagUrl":  "https://flagcdn.com/w320/sc.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сейшельські Острови",
                                        "region":  "Африка",
                                        "capital":  "Вікторія",
                                        "demonym":  "Сейшельці"
                                    }
                         }
    },
    {
        "id":  "sierra-leone",
        "country":  "Sierra Leone",
        "transcription":  "[siˈerəlioun]",
        "region":  "Africa",
        "capital":  "Freetown",
        "capitalTranscription":  "[ˈfriːtaun]",
        "demonym":  "Sierra Leonean",
        "iso2":  "sl",
        "flagUrl":  "https://flagcdn.com/w320/sl.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сьєрра-Леоне",
                                        "region":  "Африка",
                                        "capital":  "Фрітаун",
                                        "demonym":  "Сьєрралеонці"
                                    }
                         }
    },
    {
        "id":  "somalia",
        "country":  "Somalia",
        "transcription":  "[səˈmɑːliə]",
        "region":  "Africa",
        "capital":  "Mogadishu",
        "capitalTranscription":  "[ˌmɔgəˈdiʃuː]",
        "demonym":  "Somali [səˈmɑːli]",
        "iso2":  "so",
        "flagUrl":  "https://flagcdn.com/w320/so.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сомалі",
                                        "region":  "Африка",
                                        "capital":  "Могадішо",
                                        "demonym":  "Сомалійці"
                                    }
                         }
    },
    {
        "id":  "south-africa",
        "country":  "South Africa",
        "transcription":  "[ˌsaʊθ ˈæfrɪkə]",
        "region":  "Africa",
        "capital":  "Pretoria (judicial)",
        "capitalTranscription":  "[priˈtɔːriə] (official), Cape Town [keip] (legislative), Bloemfontein [ˈbluːmfɒnˌtein]",
        "demonym":  "South African",
        "iso2":  "za",
        "flagUrl":  "https://flagcdn.com/w320/za.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Південно-Африканська Республіка",
                                        "region":  "Африка",
                                        "capital":  "Преторія / Кейптаун",
                                        "demonym":  "Південноафриканці"
                                    }
                         }
    },
    {
        "id":  "south-sudan",
        "country":  "South Sudan",
        "transcription":  "[suˈdæn, -dɑːn]",
        "region":  "Africa",
        "capital":  "Juba",
        "capitalTranscription":  "[ˈdʒuːbə]",
        "demonym":  "South Sudanese",
        "iso2":  "ss",
        "flagUrl":  "https://flagcdn.com/w320/ss.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Південний Судан",
                                        "region":  "Африка",
                                        "capital":  "Джуба",
                                        "demonym":  "Південні суданці"
                                    }
                         }
    },
    {
        "id":  "sudan",
        "country":  "Sudan",
        "transcription":  "[suˈdæn, -dɑːn]",
        "region":  "Africa",
        "capital":  "Khartoum",
        "capitalTranscription":  "[kɑːˈtuːm]",
        "demonym":  "Sudanese",
        "iso2":  "sd",
        "flagUrl":  "https://flagcdn.com/w320/sd.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Судан",
                                        "region":  "Африка",
                                        "capital":  "Хартум",
                                        "demonym":  "Суданці"
                                    }
                         }
    },
    {
        "id":  "swaziland",
        "country":  "Swaziland",
        "transcription":  "[ˈswɑːzilænd]",
        "region":  "Africa",
        "capital":  "Mbabane",
        "capitalTranscription":  "[ə)mbɑːˈbɑːni]",
        "demonym":  "Swazi",
        "iso2":  "sz",
        "flagUrl":  "https://flagcdn.com/w320/sz.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Есватіні",
                                        "region":  "Африка",
                                        "capital":  "Мбабане",
                                        "demonym":  "Свазі"
                                    }
                         }
    },
    {
        "id":  "united-republic-of-tanzania",
        "country":  "United Republic of Tanzania",
        "transcription":  "[ˌtænzəˈniːə]",
        "region":  "Africa",
        "capital":  "Dar es Salaam (de facto)",
        "capitalTranscription":  "[ˌdɑːressəˈlɑːm], Dodoma(official) [douˈdoumə]",
        "demonym":  "Tanzanian",
        "iso2":  "tz",
        "flagUrl":  "https://flagcdn.com/w320/tz.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Танзанія",
                                        "region":  "Африка",
                                        "capital":  "Додома (Дар-ес-Салам)",
                                        "demonym":  "Танзанійці"
                                    }
                         }
    },
    {
        "id":  "togo",
        "country":  "Togo",
        "transcription":  "[ˈtougou]",
        "region":  "Africa",
        "capital":  "Lome",
        "capitalTranscription":  "[ˈloumei]",
        "demonym":  "Togolese",
        "iso2":  "tg",
        "flagUrl":  "https://flagcdn.com/w320/tg.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Того",
                                        "region":  "Африка",
                                        "capital":  "Ломе",
                                        "demonym":  "Тоголезці"
                                    }
                         }
    },
    {
        "id":  "tunisia",
        "country":  "Tunisia",
        "transcription":  "[tjuːˈniziə]",
        "region":  "Africa",
        "capital":  "Tunis",
        "capitalTranscription":  "[ˈtjuːnis]",
        "demonym":  "Tunisian",
        "iso2":  "tn",
        "flagUrl":  "https://flagcdn.com/w320/tn.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Туніс",
                                        "region":  "Африка",
                                        "capital":  "Туніс",
                                        "demonym":  "Тунісці"
                                    }
                         }
    },
    {
        "id":  "uganda",
        "country":  "Uganda",
        "transcription":  "[juːˈgændə]",
        "region":  "Africa",
        "capital":  "Kampala",
        "capitalTranscription":  "[kæmˈpɑːlə]",
        "demonym":  "Ugandan",
        "iso2":  "ug",
        "flagUrl":  "https://flagcdn.com/w320/ug.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Уганда",
                                        "region":  "Африка",
                                        "capital":  "Кампала",
                                        "demonym":  "Угандійці"
                                    }
                         }
    },
    {
        "id":  "zambia",
        "country":  "Zambia",
        "transcription":  "[ˈzæmbiə]",
        "region":  "Africa",
        "capital":  "Lusaka",
        "capitalTranscription":  "[luːˈsɑːkə]",
        "demonym":  "Zambian",
        "iso2":  "zm",
        "flagUrl":  "https://flagcdn.com/w320/zm.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Замбія",
                                        "region":  "Африка",
                                        "capital":  "Лусака",
                                        "demonym":  "Замбійці"
                                    }
                         }
    },
    {
        "id":  "zimbabwe",
        "country":  "Zimbabwe",
        "transcription":  "[zimˈbɑːbwi, -wei]",
        "region":  "Africa",
        "capital":  "Harare",
        "capitalTranscription":  "[həˈrɑːri]",
        "demonym":  "Zimbabwean",
        "iso2":  "zw",
        "flagUrl":  "https://flagcdn.com/w320/zw.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Зімбабве",
                                        "region":  "Африка",
                                        "capital":  "Хараре",
                                        "demonym":  "Зімбабвійці"
                                    }
                         }
    },
    {
        "id":  "australia",
        "country":  "Australia",
        "transcription":  "[ɔˈstreiliə]",
        "region":  "Australia and Oceania",
        "capital":  "Canberra",
        "capitalTranscription":  "[ˈkanbərə]",
        "demonym":  "Australian",
        "iso2":  "au",
        "flagUrl":  "https://flagcdn.com/w320/au.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Австралія",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Канберра",
                                        "demonym":  "Австралійці"
                                    }
                         }
    },
    {
        "id":  "fiji",
        "country":  "Fiji",
        "transcription":  "[ˈfiːdʒi]",
        "region":  "Australia and Oceania",
        "capital":  "Suva",
        "capitalTranscription":  "[ˈsuːvə]",
        "demonym":  "Fijian",
        "iso2":  "fj",
        "flagUrl":  "https://flagcdn.com/w320/fj.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Фіджі",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Сува",
                                        "demonym":  "Фіджійці"
                                    }
                         }
    },
    {
        "id":  "kiribati",
        "country":  "Kiribati",
        "transcription":  "[kiriˈbæːti]",
        "region":  "Australia and Oceania",
        "capital":  "Tarawa",
        "capitalTranscription":  "[təˈrɑːwə]",
        "demonym":  "I-Kiribati",
        "iso2":  "ki",
        "flagUrl":  "https://flagcdn.com/w320/ki.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Кірибаті",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Тарава",
                                        "demonym":  "Кірибатійці"
                                    }
                         }
    },
    {
        "id":  "marshall-islands",
        "country":  "Marshall Islands",
        "transcription":  "[ˈmɑːʃl]",
        "region":  "Australia and Oceania",
        "capital":  "Majuro",
        "capitalTranscription":  "[ˈmæˈdʒərou]",
        "demonym":  "Marshallese",
        "iso2":  "mh",
        "flagUrl":  "https://flagcdn.com/w320/mh.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Маршаллові Острови",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Маджуро",
                                        "demonym":  "Маршальці"
                                    }
                         }
    },
    {
        "id":  "micronesia",
        "country":  "Micronesia",
        "transcription":  "[ˌmʌikrouˈniːziə]",
        "region":  "Australia and Oceania",
        "capital":  "Palikir",
        "capitalTranscription":  "[ˈpælikiər]",
        "demonym":  "Micronesian",
        "iso2":  "fm",
        "flagUrl":  "https://flagcdn.com/w320/fm.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Мікронезія",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Палікір",
                                        "demonym":  "Мікронезійці"
                                    }
                         }
    },
    {
        "id":  "nauru",
        "country":  "Nauru",
        "transcription":  "[nɑːˈuːruː]",
        "region":  "Australia and Oceania",
        "capital":  "Yaren",
        "capitalTranscription":  "['ya:rən]",
        "demonym":  "Nauruan",
        "iso2":  "nr",
        "flagUrl":  "https://flagcdn.com/w320/nr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Науру",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Ярен",
                                        "demonym":  "Науруанці"
                                    }
                         }
    },
    {
        "id":  "new-zealand",
        "country":  "New Zealand",
        "transcription":  "[njuː ˈziːlənd]",
        "region":  "Australia and Oceania",
        "capital":  "Wellington",
        "capitalTranscription":  "[ˈweliŋtən]",
        "demonym":  "New Zealander",
        "iso2":  "nz",
        "flagUrl":  "https://flagcdn.com/w320/nz.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Нова Зеландія",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Веллінгтон",
                                        "demonym":  "Новозеландці"
                                    }
                         }
    },
    {
        "id":  "palau",
        "country":  "Palau",
        "transcription":  "[pəˈlau]",
        "region":  "Australia and Oceania",
        "capital":  "Ngerulmud",
        "capitalTranscription":  "[ŋəˈruːlmʊd]",
        "demonym":  "Palauan",
        "iso2":  "pw",
        "flagUrl":  "https://flagcdn.com/w320/pw.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Палау",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Нгерулмуд",
                                        "demonym":  "Палауанці"
                                    }
                         }
    },
    {
        "id":  "papua-new-guinea",
        "country":  "Papua New Guinea",
        "transcription":  "[ˌpæpuənjuː ˈginiː]",
        "region":  "Australia and Oceania",
        "capital":  "Port Moresby",
        "capitalTranscription":  "[ˈmɔːzbi]",
        "demonym":  "Papua New Guinean",
        "iso2":  "pg",
        "flagUrl":  "https://flagcdn.com/w320/pg.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Папуа-Нова Гвінея",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Порт-Морсбі",
                                        "demonym":  "Папуаси"
                                    }
                         }
    },
    {
        "id":  "samoa",
        "country":  "Samoa",
        "transcription":  "[səˈmouə]",
        "region":  "Australia and Oceania",
        "capital":  "Apia",
        "capitalTranscription":  "[ˈapiə]",
        "demonym":  "Samoan",
        "iso2":  "ws",
        "flagUrl":  "https://flagcdn.com/w320/ws.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Самоа",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Апіа",
                                        "demonym":  "Самоанці"
                                    }
                         }
    },
    {
        "id":  "solomon-islands",
        "country":  "Solomon Islands",
        "transcription":  "[ˈsɔləmən]",
        "region":  "Australia and Oceania",
        "capital":  "Honiara",
        "capitalTranscription":  "[ˌhouniˈɑːrə]",
        "demonym":  "Solomon Islander",
        "iso2":  "sb",
        "flagUrl":  "https://flagcdn.com/w320/sb.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Соломонові Острови",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Хоніара",
                                        "demonym":  "Соломонці"
                                    }
                         }
    },
    {
        "id":  "tonga",
        "country":  "Tonga",
        "transcription":  "[ˈtɔŋgə]",
        "region":  "Australia and Oceania",
        "capital":  "Nuku’alofa",
        "capitalTranscription":  "[nuːkuːəˈloufə]",
        "demonym":  "Tongan",
        "iso2":  "to",
        "flagUrl":  "https://flagcdn.com/w320/to.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Тонга",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Нукуалофа",
                                        "demonym":  "Тонганці"
                                    }
                         }
    },
    {
        "id":  "tuvalu",
        "country":  "Tuvalu",
        "transcription":  "[tuːˈvɑːluː]",
        "region":  "Australia and Oceania",
        "capital":  "Funafuti",
        "capitalTranscription":  "[fuːnəˈfuːti]",
        "demonym":  "Tuvaluan",
        "iso2":  "tv",
        "flagUrl":  "https://flagcdn.com/w320/tv.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Тувалу",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Фунафуті",
                                        "demonym":  "Тувалуанці"
                                    }
                         }
    },
    {
        "id":  "vanuatu",
        "country":  "Vanuatu",
        "transcription":  "[ˌvanuːˈɑːtuː]",
        "region":  "Australia and Oceania",
        "capital":  "Port Vila",
        "capitalTranscription":  "[ˈviːlə]",
        "demonym":  "Ni-Vanuatu [niːvanuːˈɑːtuː]",
        "iso2":  "vu",
        "flagUrl":  "https://flagcdn.com/w320/vu.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Вануату",
                                        "region":  "Австралія та Океанія",
                                        "capital":  "Порт-Віла",
                                        "demonym":  "Ні-вануату"
                                    }
                         }
    },
    {
        "id":  "antigua-and-barbuda",
        "country":  "Antigua and Barbuda",
        "transcription":  "[ænˌtiːgəənbɑːˈbuːdə]",
        "region":  "North and South America",
        "capital":  "Saint John’s",
        "capitalTranscription":  "[,seint 'jonz]",
        "demonym":  "Antiguan, Barbudan",
        "iso2":  "ag",
        "flagUrl":  "https://flagcdn.com/w320/ag.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Антигуа і Барбуда",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Сент-Джонс",
                                        "demonym":  "Антигуанці, барбуданці"
                                    }
                         }
    },
    {
        "id":  "argentina",
        "country":  "Argentina",
        "transcription":  "[ˌɑːdʒənˈtiːnə]",
        "region":  "North and South America",
        "capital":  "Buenos Aires",
        "capitalTranscription":  "[bweinəs ˈʌiriːz]",
        "demonym":  "Argentine, Argentinian",
        "iso2":  "ar",
        "flagUrl":  "https://flagcdn.com/w320/ar.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Аргентина",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Буенос-Айрес",
                                        "demonym":  "Аргентинці"
                                    }
                         }
    },
    {
        "id":  "the-bahamas",
        "country":  "The Bahamas",
        "transcription":  "[bəˈhɑːməz]",
        "region":  "North and South America",
        "capital":  "Nassau",
        "capitalTranscription":  "[ˈnæsɔː]",
        "demonym":  "Bahamian",
        "iso2":  "bs",
        "flagUrl":  "https://flagcdn.com/w320/bs.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Багамські Острови",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Нассау",
                                        "demonym":  "Багамці"
                                    }
                         }
    },
    {
        "id":  "barbados",
        "country":  "Barbados",
        "transcription":  "[bɑːˈbeidəs, -dous]",
        "region":  "North and South America",
        "capital":  "Bridgetown",
        "capitalTranscription":  "[ˈbridʒtaun]",
        "demonym":  "Barbadian",
        "iso2":  "bb",
        "flagUrl":  "https://flagcdn.com/w320/bb.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Барбадос",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Бриджтаун",
                                        "demonym":  "Барбадосці"
                                    }
                         }
    },
    {
        "id":  "belize",
        "country":  "Belize",
        "transcription":  "[bəˈliːz]",
        "region":  "North and South America",
        "capital":  "Belmopan",
        "capitalTranscription":  "[ˌbɛlmouˈpan]",
        "demonym":  "Belizean",
        "iso2":  "bz",
        "flagUrl":  "https://flagcdn.com/w320/bz.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Беліз",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Бельмопан",
                                        "demonym":  "Белізці"
                                    }
                         }
    },
    {
        "id":  "bolivia",
        "country":  "Bolivia",
        "transcription":  "[bəˈliviə]",
        "region":  "North and South America",
        "capital":  "Sucre (official)",
        "capitalTranscription":  "[ˈsuːkrei], La Paz (de facto) [lɑː ˈpɑːz]",
        "demonym":  "Bolivian",
        "iso2":  "bo",
        "flagUrl":  "https://flagcdn.com/w320/bo.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Болівія",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Сукре",
                                        "demonym":  "Болівійці"
                                    }
                         }
    },
    {
        "id":  "brazil",
        "country":  "Brazil",
        "transcription":  "[brəˈzil]",
        "region":  "North and South America",
        "capital":  "Brasilia",
        "capitalTranscription":  "[brəˈziliə]",
        "demonym":  "Brazilian",
        "iso2":  "br",
        "flagUrl":  "https://flagcdn.com/w320/br.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Бразилія",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Бразиліа",
                                        "demonym":  "Бразильці"
                                    }
                         }
    },
    {
        "id":  "canada",
        "country":  "Canada",
        "transcription":  "[ˈkænədə]",
        "region":  "North and South America",
        "capital":  "Ottawa",
        "capitalTranscription":  "[ˈɔtəwə]",
        "demonym":  "Canadian",
        "iso2":  "ca",
        "flagUrl":  "https://flagcdn.com/w320/ca.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Канада",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Оттава",
                                        "demonym":  "Канадці"
                                    }
                         }
    },
    {
        "id":  "chile",
        "country":  "Chile",
        "transcription":  "[ˈtʃili]",
        "region":  "North and South America",
        "capital":  "Santiago",
        "capitalTranscription":  "[ˌsantiˈɑːgou]",
        "demonym":  "Chilean",
        "iso2":  "cl",
        "flagUrl":  "https://flagcdn.com/w320/cl.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Чилі",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Сантьяго",
                                        "demonym":  "Чилійці"
                                    }
                         }
    },
    {
        "id":  "colombia",
        "country":  "Colombia",
        "transcription":  "[kəˈlʌmbiə]",
        "region":  "North and South America",
        "capital":  "Bogota",
        "capitalTranscription":  "[bougəˈtɑː]",
        "demonym":  "Colombian",
        "iso2":  "co",
        "flagUrl":  "https://flagcdn.com/w320/co.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Колумбія",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Богота",
                                        "demonym":  "Колумбійці"
                                    }
                         }
    },
    {
        "id":  "costa-rica",
        "country":  "Costa Rica",
        "transcription":  "[ˌkɔstə ˈriːkə]",
        "region":  "North and South America",
        "capital":  "San José",
        "capitalTranscription":  "[sa:nhouˈzei]",
        "demonym":  "Costa Rican",
        "iso2":  "cr",
        "flagUrl":  "https://flagcdn.com/w320/cr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Коста-Рика",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Сан-Хосе",
                                        "demonym":  "Костариканці"
                                    }
                         }
    },
    {
        "id":  "cuba",
        "country":  "Cuba",
        "transcription":  "[ˈkjuːbə]",
        "region":  "North and South America",
        "capital":  "Havana",
        "capitalTranscription":  "[həˈvænə]",
        "demonym":  "Cuban",
        "iso2":  "cu",
        "flagUrl":  "https://flagcdn.com/w320/cu.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Куба",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Гавана",
                                        "demonym":  "Кубинці"
                                    }
                         }
    },
    {
        "id":  "dominica",
        "country":  "Dominica",
        "transcription":  "[dəmiˈnikə]",
        "region":  "North and South America",
        "capital":  "Roseau",
        "capitalTranscription":  "[rouˈzou]",
        "demonym":  "Dominican",
        "iso2":  "dm",
        "flagUrl":  "https://flagcdn.com/w320/dm.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Домініка",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Розо",
                                        "demonym":  "Домінікці"
                                    }
                         }
    },
    {
        "id":  "dominican-republic",
        "country":  "Dominican Republic",
        "transcription":  "[dəˈminikən]",
        "region":  "North and South America",
        "capital":  "Santo Domingo",
        "capitalTranscription":  "[ˌsantoudəˈmiŋgou]",
        "demonym":  "Dominican",
        "iso2":  "do",
        "flagUrl":  "https://flagcdn.com/w320/do.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Домініканська Республіка",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Санто-Домінго",
                                        "demonym":  "Домініканці"
                                    }
                         }
    },
    {
        "id":  "ecuador",
        "country":  "Ecuador",
        "transcription":  "[ˈɛkwədɔː]",
        "region":  "North and South America",
        "capital":  "Quito",
        "capitalTranscription":  "[ˈkiːtou]",
        "demonym":  "Ecuadorian",
        "iso2":  "ec",
        "flagUrl":  "https://flagcdn.com/w320/ec.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Еквадор",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Кіто",
                                        "demonym":  "Еквадорці"
                                    }
                         }
    },
    {
        "id":  "el-salvador",
        "country":  "El Salvador",
        "transcription":  "[el ˈsælvədɔː]",
        "region":  "North and South America",
        "capital":  "San Salvador",
        "capitalTranscription":  "[ˈsælvədɔː]",
        "demonym":  "Salvadoran",
        "iso2":  "sv",
        "flagUrl":  "https://flagcdn.com/w320/sv.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сальвадор",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Сан-Сальвадор",
                                        "demonym":  "Сальвадорці"
                                    }
                         }
    },
    {
        "id":  "grenada",
        "country":  "Grenada",
        "transcription":  "[grəˈneidə]",
        "region":  "North and South America",
        "capital":  "Saint George’s",
        "capitalTranscription":  "[ˈdʒɔːdʒiz]",
        "demonym":  "Grenadian",
        "iso2":  "gd",
        "flagUrl":  "https://flagcdn.com/w320/gd.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Гренада",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Сент-Джорджес",
                                        "demonym":  "Гренадці"
                                    }
                         }
    },
    {
        "id":  "guatemala",
        "country":  "Guatemala",
        "transcription":  "[ˌgwɑːtəˈmɑːlə]",
        "region":  "North and South America",
        "capital":  "Guatemala City",
        "capitalTranscription":  "[ˌgwɑːtəˈmɑːlə]",
        "demonym":  "Guatemalan",
        "iso2":  "gt",
        "flagUrl":  "https://flagcdn.com/w320/gt.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Гватемала",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Гватемала",
                                        "demonym":  "Гватемальці"
                                    }
                         }
    },
    {
        "id":  "guyana",
        "country":  "Guyana",
        "transcription":  "[gaiˈænə]",
        "region":  "North and South America",
        "capital":  "Georgetown",
        "capitalTranscription":  "[ˈdʒɔːdʒtaun]",
        "demonym":  "Guyanese",
        "iso2":  "gy",
        "flagUrl":  "https://flagcdn.com/w320/gy.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Гайана",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Джорджтаун",
                                        "demonym":  "Гаянці"
                                    }
                         }
    },
    {
        "id":  "haiti",
        "country":  "Haiti",
        "transcription":  "[ˈheiti]",
        "region":  "North and South America",
        "capital":  "Port-au-Prince",
        "capitalTranscription":  "[pɔːrtouˈprins]",
        "demonym":  "Haitian [ˈheiʃ(ə)n]",
        "iso2":  "ht",
        "flagUrl":  "https://flagcdn.com/w320/ht.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Гаїті",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Порт-о-Пренс",
                                        "demonym":  "Гаїтяни"
                                    }
                         }
    },
    {
        "id":  "honduras",
        "country":  "Honduras",
        "transcription":  "[hɒnˈd(j)uərəs]",
        "region":  "North and South America",
        "capital":  "Tegucigalpa",
        "capitalTranscription":  "[teˌguːsiˈgalpə]",
        "demonym":  "Honduran",
        "iso2":  "hn",
        "flagUrl":  "https://flagcdn.com/w320/hn.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Гондурас",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Тегусігальпа",
                                        "demonym":  "Гондурасці"
                                    }
                         }
    },
    {
        "id":  "jamaica",
        "country":  "Jamaica",
        "transcription":  "[dʒəˈmeikə]",
        "region":  "North and South America",
        "capital":  "Kingston",
        "capitalTranscription":  "[ˈkiŋstən]",
        "demonym":  "Jamaican",
        "iso2":  "jm",
        "flagUrl":  "https://flagcdn.com/w320/jm.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Ямайка",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Кінгстон",
                                        "demonym":  "Ямайці"
                                    }
                         }
    },
    {
        "id":  "mexico",
        "country":  "Mexico",
        "transcription":  "[ˈmeksikou]",
        "region":  "North and South America",
        "capital":  "Mexico City",
        "capitalTranscription":  "[ˈmeksikou]",
        "demonym":  "Mexican",
        "iso2":  "mx",
        "flagUrl":  "https://flagcdn.com/w320/mx.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Мексика",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Мехіко",
                                        "demonym":  "Мексиканці"
                                    }
                         }
    },
    {
        "id":  "nicaragua",
        "country":  "Nicaragua",
        "transcription":  "[ˌnikəˈrægwə]",
        "region":  "North and South America",
        "capital":  "Managua",
        "capitalTranscription":  "[məˈnɑːgwə]",
        "demonym":  "Nicaraguan",
        "iso2":  "ni",
        "flagUrl":  "https://flagcdn.com/w320/ni.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Нікарагуа",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Манагуа",
                                        "demonym":  "Нікарагуанці"
                                    }
                         }
    },
    {
        "id":  "panama",
        "country":  "Panama",
        "transcription":  "[ˈpænəmɑː]",
        "region":  "North and South America",
        "capital":  "Panama City",
        "capitalTranscription":  "[ˈpænəmɑː]",
        "demonym":  "Panamanian",
        "iso2":  "pa",
        "flagUrl":  "https://flagcdn.com/w320/pa.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Панама",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Панама",
                                        "demonym":  "Панамці"
                                    }
                         }
    },
    {
        "id":  "paraguay",
        "country":  "Paraguay",
        "transcription":  "[ˈpærəgwai]",
        "region":  "North and South America",
        "capital":  "Asuncion",
        "capitalTranscription":  "[asunˈθjon]",
        "demonym":  "Paraguayan",
        "iso2":  "py",
        "flagUrl":  "https://flagcdn.com/w320/py.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Парагвай",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Асунсьйон",
                                        "demonym":  "Парагвайці"
                                    }
                         }
    },
    {
        "id":  "peru",
        "country":  "Peru",
        "transcription":  "[pəˈruː]",
        "region":  "North and South America",
        "capital":  "Lima",
        "capitalTranscription":  "[ˈliːmə]",
        "demonym":  "Peruvian",
        "iso2":  "pe",
        "flagUrl":  "https://flagcdn.com/w320/pe.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Перу",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Ліма",
                                        "demonym":  "Перуанці"
                                    }
                         }
    },
    {
        "id":  "saint-kitts-and-nevis",
        "country":  "Saint Kitts and Nevis",
        "transcription":  "[seint ˌkits ænd ˈniːvis]",
        "region":  "North and South America",
        "capital":  "Basseterre",
        "capitalTranscription":  "[basˈteːr]",
        "demonym":  "Kittitian, Nevisian",
        "iso2":  "kn",
        "flagUrl":  "https://flagcdn.com/w320/kn.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сент-Кіттс і Невіс",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Бастер",
                                        "demonym":  "Сент-кіттсці, невісці"
                                    }
                         }
    },
    {
        "id":  "saint-lucia",
        "country":  "Saint Lucia",
        "transcription":  "[ˈluːʃə]",
        "region":  "North and South America",
        "capital":  "Castries",
        "capitalTranscription":  "[ˈkæstriːz]",
        "demonym":  "Saint Lucian",
        "iso2":  "lc",
        "flagUrl":  "https://flagcdn.com/w320/lc.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сент-Люсія",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Кастрі",
                                        "demonym":  "Сентлюсійці"
                                    }
                         }
    },
    {
        "id":  "saint-vincent-and-the-grenadines",
        "country":  "Saint Vincent and the Grenadines",
        "transcription":  "[ˌvinsəntənðə ˈgrenədiːnz]",
        "region":  "North and South America",
        "capital":  "Kingstown",
        "capitalTranscription":  "[ˈkiŋztaun]",
        "demonym":  "Vincentian",
        "iso2":  "vc",
        "flagUrl":  "https://flagcdn.com/w320/vc.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сент-Вінсент і Гренадини",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Кінгстаун",
                                        "demonym":  "Сентвінсентці"
                                    }
                         }
    },
    {
        "id":  "suriname",
        "country":  "Suriname",
        "transcription":  "[suriˈnæm, -ˈnɑːm]",
        "region":  "North and South America",
        "capital":  "Paramaribo",
        "capitalTranscription":  "[ˌparəˈmaribou]",
        "demonym":  "Surinamese",
        "iso2":  "sr",
        "flagUrl":  "https://flagcdn.com/w320/sr.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Суринам",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Парамарибо",
                                        "demonym":  "Суринамці"
                                    }
                         }
    },
    {
        "id":  "trinidad-and-tobago",
        "country":  "Trinidad and Tobago",
        "transcription":  "[ˈtrinidadəndtəˈbeigou]",
        "region":  "North and South America",
        "capital":  "Port of Spain",
        "capitalTranscription":  "[ˌpɔːt əv ˈspeɪn]",
        "demonym":  "Trinidadian, Tobagonian",
        "iso2":  "tt",
        "flagUrl":  "https://flagcdn.com/w320/tt.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Тринідад і Тобаго",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Порт-оф-Спейн",
                                        "demonym":  "Тринідадці і тобагонці"
                                    }
                         }
    },
    {
        "id":  "united-states-of-america",
        "country":  "United States of America",
        "transcription":  "[juːˌnaɪtɪd ˌsteɪts əv əˈmɛrɪkə]",
        "region":  "North and South America",
        "capital":  "Washington, D.C.",
        "capitalTranscription":  "[wɒʃiŋtən diː ˈsiː]",
        "demonym":  "American",
        "iso2":  "us",
        "flagUrl":  "https://flagcdn.com/w320/us.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Сполучені Штати Америки",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Вашингтон",
                                        "demonym":  "Американці"
                                    }
                         }
    },
    {
        "id":  "uruguay",
        "country":  "Uruguay",
        "transcription":  "[ˈjuərəgwai]",
        "region":  "North and South America",
        "capital":  "Montevideo",
        "capitalTranscription":  "[mɒntiviˈdeiou]",
        "demonym":  "Uruguayan",
        "iso2":  "uy",
        "flagUrl":  "https://flagcdn.com/w320/uy.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Уругвай",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Монтевідео",
                                        "demonym":  "Уругвайці"
                                    }
                         }
    },
    {
        "id":  "venezuela",
        "country":  "Venezuela",
        "transcription":  "[ˌvenəˈzweilə]",
        "region":  "North and South America",
        "capital":  "Caracas",
        "capitalTranscription":  "[kəˈrækəs]",
        "demonym":  "Venezuelan",
        "iso2":  "ve",
        "flagUrl":  "https://flagcdn.com/w320/ve.png",
        "translations":  {
                             "uk":  {
                                        "country":  "Венесуела",
                                        "region":  "Північна та Південна Америка",
                                        "capital":  "Каракас",
                                        "demonym":  "Венесуельці"
                                    }
                         }
    }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { countriesData };
}