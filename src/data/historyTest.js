import walls from '../images/tests/history/walls.jpg';
import architecture from '../images/tests/history/architecture.jpg';
import bismark from '../images/tests/history/bismark.jpg';
import bombs from '../images/tests/history/bombs.jpg';
import monkey from '../images/tests/history/monkey.jpg';
import religion from '../images/tests/history/religion.jpg';

// Перша відповідь правильна всередині масиву

let historyTest = [
    {
        question: 'Укажіть головне джерело рабства в Єгипті в період Нового Царства.',
        answers: [
            'полонені, захоплені під час воєн',
            'громадяни, які скоїли тяжкі злочини',
            'ремісники, які не повернули борг лихвареві',
            'селяни, які втратили свої земельні наділи'
        ]
    },
    {
        question: `Про кого з персонажів давньоєврейської історії йдеться в цитованому документі?
        
        «Вождь і законодавець народу єврейського, основоположник іудаїзму. Здійснив Вихід євреїв із Давнього Єгипту та, згуртувавши ізраїльські коліна в єдиний народ, привів його до Землі Обітованої. Перед смертю своїм наступником призначив Ісуса Навіна, керівника єврейського війська».`,
        answers: [
            'Мойсея',
            'Соломона',
            'Давида',
            'Саула'
        ]
    },
    {
        question: 'У якій країні для охорони кордонів і торгівельних шляхів було збудовано зображене на фото укріплення?',
        imageSrc: walls,
        imageAlt: 'Стіни',
        answers: [
            'Китаї',
            'Єгипті',
            'Вавилоні',
            'Індії'
        ]
    },
    {
        question: 'Велика грецька колонізація узбережжя Середземного та Чорного морів тривала впродовж',
        answers: [
            'VIII–VI ст. до н. е.',
            'ХІ–ІХ ст. до н. е.',
            'V–IV ст. до н. е.',
            'ІІІ–І ст. до н. е.'
        ]
    },
    {
        question: 'Що стало наслідком Пунічних війн (ІІІ–ІІ ст. до н. е.)?',
        answers: [
            'установлення панування Риму в Західному Середземномор’ї',
            'утворення Римсько-італійського союзу під зверхністю Риму',
            'запровадження Римом провінційного управління в Сирії',
            'ліквідація Римом Ахейського та інших грецьких союзів'
        ]
    },
    {
        question: 'Епоха Середньовіччя в історії Європи тривала впродовж',
        answers: [
            '476–1492 рр.',
            '395–1380 рр.',
            '632–1453 рр.',
            '843–1517 рр.'
        ]
    },
    {
        question: 'Форма правління в країнах Європи епохи Середньовіччя, за якої одноосібна влада монарха обмежувалася владою органу, до складу якого входили представники духовенства, світських феодалів та городян, називається',
        answers: [
            'станово-представницька монархія.',
            'дуалістична монархія.',
            'абсолютна монархія.',
            'деспотична монархія.'
        ]
    },
    {
        question: 'Що стало одним із наслідків Першого Хрестового походу (1096–1099 рр.)?',
        answers: [
            'створення рицарсько-чернечих орденів',
            'падіння Візантійської імперії',
            'утворення Іспанського королівства',
            'заснування Латинської імперії'
        ]
    },
    {
        question: 'Виникнення якої релігії пов’язане з діячем, зображеним на середньовічних рисунках?',
        imageSrc: religion,
        imageAlt: 'Рисунки релігії',
        answers: [
            'ісламу',
            'буддизму',
            'християнства',
            'конфуціанства'
        ]
    },
    {
        question: 'У якому стилі збудовано зображені на фото пам’ятки архітектури?',
        imageSrc: architecture,
        imageAlt: 'Архітектура',
        answers: [
            'готичному',
            'романському',
            'мавританському',
            'візантійському'
        ]
    },
    {
        question: 'Виникнення та розквіт держави Маур’їв, Делійського султанату, імперії Великих Моголів — це важливі віхи в історії',
        answers: [
            'півострова Індостан.',
            'Піренейського півострова.',
            'півострова Мала Азія.',
            'Аравійського півострова.'
        ]
    },
    {
        question: 'Яке географічне відкриття пов’язане з іменем Васко да Гами?',
        answers: [
            'відкрив морський шлях із Європи до країн Сходу навколо Африки',
            'відкрив Нову Зеландію та довів, що Австралія — материк',
            'здійснив навколосвітню подорож й уперше довів, що Земля є кулею',
            'відкрив Америку, шукаючи шлях до Індії через Атлантичний океан'
        ]
    },
    {
        question: 'Визнання лютеранства, поряд із католицизмом, офіційним віросповіданням, закріплення за німецькими князями права визначати релігію своїх підданих згідно з принципом «чия влада, того і віра» — це історичне значення',
        answers: [
            'Аугсбурзького миру (1555 р.).',
            'Тордесільяського миру (1494 р.).',
            'Вічного миру (1686 р.).',
            'Ніштадського миру (1721 р.).'
        ]
    },
    {
        question: 'Розгортання якого процесу в Англії наприкінці XV–XVІ ст. спричинило появу «Кривавого законодавства»?',
        answers: [
            'обгороджування',
            'акріпачення',
            'королівської Реформації',
            'промислового перевороту'
        ]
    },
    {
        question: 'У якому році створено Річ Посполиту?',
        answers: [
            '1569 р.',
            '1385 р.',
            '1410 р.',
            '1652 р.'
        ]
    },
    {
        question: 'Що стало одним із наслідків битви під Віднем (1683 р.)?',
        answers: [
            'створення європейської антитурецької коаліції «Священна ліга»',
            'звільнення Угорщини і Трансільванії від османського панування',
            'придушення антитурецького гайдуцького руху в Болгарії та Сербії',
            'втрата Османською імперією всіх своїх володінь на Балканах'
        ]
    },{
        question: `Якій добі в історії Європи Іммануїл Кант дав таку характеристику:

        «…це вихід людини зі стану свого неповноліття.., причина якого полягає не у відсутності розуму, а у відсутності рішучості й мужності користуватися ним без стороннього керівництва. Май мужність користуватися власним розумом! — таким є гасло……ми живемо в столітті.., коли існують явні ознаки того, що для людей відкрито шлях до користування власним розумом без стороннього втручання, а перепон на шляху до виходу зі стану неповноліття стає дедалі менше…»`,
        answers: [
            'Просвітництву',
            'Середньовіччю',
            'Відродженню',
            'Реформації'
        ]
    },
    {
        question: 'Упродовж якого періоду Французької революції тривала якобінська диктатура?',
        answers: [
            '1793–1794 рр.',
            '1789–1792 рр.',
            '1792–1793 рр.',
            '1794–1799 рр.'
        ]
    },
    {
        question: 'Надання країнам-учасницям антифранцузьких коаліцій компенсацій за участь у боротьбі з Наполеоном, відновлення кордонів держав і їхнього політичного устрою станом на 1792 р. — це загальні принципи перебудови Європи, ухвалені',
        answers: [
            'Віденським конгресом (1815 р.).',
            'Аахенським конгресом (1818 р.).',
            'Паризьким конгресом (1856 р.).',
            'Берлінським конгресом (1878 р.).'
        ]
    },
    {
        question: 'Яка подія пов’язана із зображеним на фото державно-політичним діячем?',
        imageSrc: bismark,
        imageAlt: 'Отто фон Бісмарк',
        answers: [
            'проголошення створення Німецької імперії',
            'створення «Священного союзу», коаліції європейських монархів',
            'перетворення Австрійської імперії на дуалістичну монархію',
            'реставрація влади династії Бурбонів у Франції'
        ]
    },
    {
        question: `Розгортання яких подій зумовило появу цитованого документа?

        «Я, президент Сполучених Штатів, владою головнокомандувача армією і флотом… наказую та оголошую, що всі особи, які вважалися рабами.., від цього часу і в подальшому вільні, і що влада Сполучених Штатів буде визнавати й охороняти свободу названих осіб…»`,
        answers: [
            'громадянської війни в США (1861–1865 рр.)',
            'війни за незалежність США (1775–1783 рр.)',
            'освоєння територій Дикого Заходу (1836–1848 рр.)',
            '«реконструкції» Півдня (1867–1872 рр.)'
        ]
    },
    {
        question: 'Наприкінці якого століття, за словами В. Леніна, «колоніальна політика капіталістичних країн закінчила захоплення незайнятих земель… Світ вперше виявився поділеним, тому в подальшому будуть лише переділи, тобто перехід від одного “власника” до іншого…»?',
        answers: [
            'XIХ ст.',
            'XVI ст.',
            'XVII ст.',
            'XVIII ст.'
        ]
    },
    {
        question: 'Яке наукове відкриття зумовило появу зображеної карикатури?',
        imageSrc: monkey,
        imageAlt: 'мавпа',
        answers: [
            'обґрунтування Ч. Дарвіном теорії еволюції шляхом природного добору',
            'відкриття Т. Морганом явища зчепленого успадкування',
            'установлення Г. Менделем основних закономірностей спадковості',
            'відкриття Г. Меллером причин генетичних мутацій'
        ]
    },
    {
        question: 'Яких стратегічних цілей прагнула досягти Велика Британія в ході Першої світової війни?',
        answers: [
            'збереження панування на морі, ослаблення Німеччини, розподіл володінь Османської імперії',
            'розчленування Німеччини, повернення Ельзасу та Лотарингії, розподіл володінь Османської імперії',
            'ослаблення Німеччини, установлення панування на Балканах, контролю над протоками Босфор і Дарданелли',
            'установлення панування в Європі, зміцнення позицій на Близькому Сході, поширення впливу на Індію'
        ]
    },
    {
        question: `Коли відбулася подія, про яку йдеться в цитованому документі?

        «Світ, затамувавши подих, стежив за тріумфальним маршем німецьких армій і відступом союзників до Парижу. Так близько підійшли німці до перемоги, а ми, французи, — до катастрофи, що цю битву назвали “дивом на Марні”. Однак “диво” навряд чи сталося, якби росіяни, вірні союзницькому обов’язку, не розпочали наступ у Східній Пруссії. Воістину, наша перемога досягнута за рахунок їхньої поразки…»`,
        answers: [
            '1914 р.',
            '1915 р.',
            '1916 р.',
            '1917 р.'
        ]
    },
    {
        question: 'Повернення Ельзас-Лотарингії під французький суверенітет, передання Франції вугільних копалень Саарського басейну, проведення демілітаризації Рейнської зони — це положення',
        answers: [
            'Версальського договору (1919 р.).',
            'Сен-Жерменського договору (1919 р.).',
            'Тріанонського договору (1920 р.).',
            'Севрського договору (1920 р.).'
        ]
    },
    {
        question: 'Економічна криза в США, що розпочалася восени 1929 р. та супроводжувалася масовими банкрутствами підприємств і стрімким зростанням безробіття, увійшла в історію під назвою',
        answers: [
            '«Велика депресія».',
            '«Нова ера проспериті».',
            '«Рік великого перелому».',
            '«Національна катастрофа».'
        ]
    },
    {
        question: '«Усе всередині держави, нічого поза державою, нічого проти держави», «Фашистська держава може бути лише корпоративною, або вона не буде фашистською» — це ідеологічні засади внутрішньої політики, проголошені',
        answers: [
            'Б. Муссоліні.',
            'Н. Чемберленом.',
            'А. Гітлером.',
            'Т. Масариком.'
        ]
    },
    {
        question: 'Укажіть наслідки індустріалізації, здійснюваної в Радянському Союзі в 1920–1930-х рр.',
        answers: [
            'урбанізація, швидке формування фабрично-заводського робітничого класу',
            'стрімке зростання заробітної плати, добробуту та життєвого рівня населення',
            'збільшення державної фінансової допомоги дрібним товаровиробникам',
            'залучення іноземного капіталу в енергетичну галузь промисловості'
        ]
    },
    {
        question: 'Успадкування левової частки промислового потенціалу Австро-Угорщини, наявність кваліфікованої робочої сили, випуск конкурентоспроможної продукції — це чинники, що сприяли економічному розвитку в 1920–1930-х рр.',
        answers: [
            'Чехословаччини.',
            'Польщі.',
            'Угорщини.',
            'Румунії.'
        ]
    },
    {
        question: 'Що таке «етатизм»?',
        answers: [
            'політична концепція, згідно з якою держава є найвищим досягненням та головним і визначальним чинником суспільного розвитку',
            'політичний режим, що характеризується повним, всеосяжним контролем держави над усіма сферами життя суспільства та окремої особи',
            'політична доктрина, що заперечує необхідність існування влади, будь-якої форми організації держави та обстоює ідею стихійного бунту мас',
            'політична та економічна теорія, яка виходить із положення, що індивідуальні свободи людини є правовим базисом суспільства та економічного ладу'
        ]
    },
    {
        question: 'Яка міжнародна подія 1930-х рр. спричинила появу зображеної карикатури?',
        answers: [
            'проведення Мюнхенської конференції',
            '«аншлюс» Німеччиною Австрії',
            'підписання радянсько-німецького договору про ненапад',
            'проведення англо-франко-радянських переговорів'
        ]
    },{
        question: `Про кого з митців йдеться в цитованому документі?

        «Російський режисер, актор, один з організаторів Державного інституту театрального мистецтва. Теоретик і практик театрального гротеску, творець “біомеханіки” — акторської системи, спрямованої на розвиток фізичної підготовленості тіла актора до негайного виконання поставленої перед ним акторської задачі. Постановками “Містерії-буф”, “Клопа”, “Лазні” В. Маяковського, “Ревізора” М. Гоголя здобув гучної слави…»`,
        answers: [
            'В. Мейєрхольда',
            'С. Ейзенштейна',
            'В. Немировича-Данченка',
            'К. Станіславського'
        ]
    },
    {
        question: 'Велика Вітчизняна війна Радянського Союзу розпочалася',
        answers: [
            '22 червня 1941 р.',
            '23 серпня 1939 р.',
            '1 вересня 1939 р.',
            '7 липня 1941 р.'
        ]
    },
    {
        question: 'Завершення корінного перелому в ході Великої Вітчизняної війни, остаточний перехід стратегічної ініціативи до Червоної армії — це історичне значення',
        answers: [
            'Курської битви.',
            'Сталінградської битви.',
            'Московської битви.',
            'Корсунь-Шевченківської битви.'
        ]
    },
    {
        question: 'Японія відмовлялася від будь-яких претензій на Курильські острови, Південний Сахалін і Тайвань, визнавала незалежність Кореї — це рішення, ухвалені під час роботи',
        answers: [
            'Сан-Франциської конференції (1951 р.).',
            'Тегеранської конференції (1943 р.).',
            'Ялтинської конференції (1945 р.).',
            'Паризької конференції (1946 р.).'
        ]
    },
    {
        question: 'Що стало безпосередньою причиною події, якій приурочено зображену карикатуру?',
        imageSrc: bombs,
        imageAlt: 'Бомби',
        answers: [
            'розміщення СРСР на Кубі ракет середнього радіуса дії',
            'проголошення США стратегічної програми «зоряних війн»',
            'переговори між США і СРСР про скорочення сил протиракетної оборони',
            'досягнення СРСР і США паритету в ракетно-ядерних озброєннях'
        ]
    },
    {
        question: 'Відмова від державного регулювання економіки, скорочення видатків державного бюджету та федеральних соціальних програм, дерегулювання підприємницької діяльності — це складові політики уряду США, що увійшла в історію під назвою',
        answers: [
            '«рейганоміка».',
            '«маккартизм».',
            '«шокова терапія».',
            '«економічне диво».'
        ]
    },
    {
        question: 'Яку роль відіграв «план Маршалла» в розвитку країн Західної Європи?',
        answers: [
            'надав імпульс відновленню національних економік',
            'зумовив створення Європейського Союзу',
            'сприяв подоланню протиріч між Західною та Східною Європою',
            'перетворив Західну Європу на економічно залежний від США регіон'
        ]
    },
    {
        question: 'Що було характерним для процесу післявоєнної відбудови народного господарства СРСР (1945 — початок 1950-х рр.)?',
        answers: [
            'першочергове відновлення роботи важкої промисловості та енергетики',
            'спрямування основних ресурсів держави на розвиток соціальної сфери',
            'використання фінансової допомоги США та країн Західної Європи',
            'пріоритетний розвиток сільського господарства та інфраструктури'
        ]
    }    
]
    
    export { historyTest };