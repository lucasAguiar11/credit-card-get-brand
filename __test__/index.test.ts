import getBrand from '../src/index'

const VISA: string[] = [
  '4716443872527311',
  '4659219721399352',
  '4573563602838654',
  '4876767464181673',
  '4614588321420196',
  '4917812667555488',
  '4916681243851823',
  '4024007175989879',
  '4024007122737256',
  '4539338059928859',
  '4929587680741648',
  '4024007109123405',
  '4716944232327458',
  '4556779646210285',
  '4485853279220881',
  '4916053087916155',
  '4962307073648658',
  '4916404516214896',
  '4485347248936958',
  '4532530908643039',
  '4532950681783838',
  '4556861884882239',
  '4024007125124809',
  '4532859860303948',
]

const MASTERCARD: string[] = [
  '5534519561475669',
  '5563017542058179',
  '5504930928745320',
  '5428190943387342',
  '5218486817980988',
  '5416155825894156',
  '5372158344838607',
  '5357802498006086',
  '5302873782966414',
  '5432694781560666',
  '5256483758452484',
  '5296771877328607',
  '5458106790139001',
  '5451471742241223',
  '5595716436444971',
  '5452299782304240',
  '5372266428748400',
  '5566035285463874',
  '5575816185015800',
  '5190294492979057',
  '5259449135981534',
  '5208711983560757',
  '5423419697275592',
  '5243013511486051',
  '5202407772096667',
  '5212801665713909',
  '5529622568274197',
  '5504669498465766',
  '5499045604817991',
  '5598394594545653',
  '5263023235146357',
  '5435718869400300',
  '5396562973093412',
  '5513748171410189',
  '5174991074232710',
  '5502922443657801',
  '5353949267147767',
  '5453264155384327',
  '5145986912837270',
  '5396441033589604',
  '5160006478386156',
  '5330162648309381',
  '5230152175034040',
  '5588643403734219',
  '5136967791922426',
  '5181463080573298',
  '5101180469895665',
  '5474766043969395',
  '5146623048274883',
  '5278448436295187',
  '5417430669776655',
  '5319849031635407',
  '5599444012282808',
  '5363604946057519',
  '5263466846780231',
  '5314331071533102',
  '5202714872774485',
  '5155916107663253',
  '5517418148174807',
  '5373349654623585',
  '5149386090033865',
  '5263156791653612',
  '5555032023810121',
]

const MAESTRO: string[] = [
  '5899162389516171',
  '67616907081437',
  '6761173428256949000',
  '6759952211292109',
  '676185659178331',
  '63048359908434',
  '5018535756304964',
  '5018787121305994000',
  '676385920686084',
  '502051930746',
  '5020824829808294000',
  '6304019929449847000',
  '676191911822',
  '501814349244',
  '5018321871615',
  '6763850779997198000',
  '50203313556644800',
  '67599429209197300',
  '67593837250717460',
  '50206805235431',
  '6759328295678390',
  '630465211447241',
  '503878903546365',
  '6759327622187309000',
  '6759884573618073000',
  '502069681778',
  '676378824806',
  '50386072153986',
  '50180199881664',
  '50184966346683656',
  '675919690991999700',
  '675913719444000',
  '503877948818912',
  '5018918363466834000',
  '50380161961779640',
  '502021915550218600',
  '676173599696869',
  '503836019101756800',
  '6762422905495181',
  '5020557928029047000',
  '6304899019174122',
  '675954502539',
  '5018606073118906',
  '676227191225',
  '67617198442502',
]

const AMEX: string[] = [
  '371179078176750',
  '343361470107006',
  '371976793075633',
  '379589716618587',
  '373357721856162',
  '349326850164665',
  '377155214180231',
  '370216480733827',
  '371720652370978',
  '373834919037706',
  '344711733496084',
  '346294472746199',
  '340779737476067',
  '342666765564286',
  '376611714089927',
  '340367730803196',
  '346003788945886',
  '374720528028716',
  '344653599831055',
  '370822632101621',
  '371612917183975',
  '374227887630736',
  '344701087539670',
  '378639972955453',
  '379883538029093',
  '345046751534089',
  '349618294754790',
  '375308525244178',
  '378673342630082',
  '370586993845650',
  '344566883297843',
  '379811393604866',
]

const DISCOVER: string[] = [
  '6011278240964888',
  '6011716139593888',
  '6011791962232235',
  '6011753894433471',
  '6221269948515714',
  '6011812936382755',
  '6011054480742809',
  '6011147604461619',
  '6011127701335221',
  '6011158209927805',
  '6011235232188611',
  '6011099925582542',
  '6011861544494163',
  '6011495313401537',
  '6011122380507851',
  '6011380673399945',
  '6011788389742028',
  '6011112832697004',
  '6011364873193274',
  '6011840412805825',
  '6011622884736948',
  '6011492176223694',
  '6011128544045571',
  '6011348877363157',
  '6011222524245325',
  '6011708960730242',
  '6011714277765954',
  '6011038088447820',
  '6011217905876805',
  '6011420653712509',
  '6011231617441345',
  '6011053914084879',
  '6011437685580712',
  '6011047167621866',
  '6011651409266131',
  '6011418311128860',
  '6011407550709720',
  '6011416886255514',
  '6011356868975749',
  '6011927524709613',
  '6011068682213013',
  '6011712393899996',
  '6011781670924975',
]

const DINERS: string[] = [
  '30079048066524',
  '30000011306556',
  '30368750184322',
  '30215569704636',
  '36540422568991',
  '36646082562362',
  '30045564908811',
  '30360914863404',
  '30208973022554',
  '30375947287447',
  '36316702373604',
  '30198656820376',
  '30001733808861',
  '30015028970913',
  '30153356302449',
  '30320689240238',
  '30147986570219',
  '38893498602634',
  '30179463446670',
  '30162699797827',
  '36227757217325',
  '38256376852905',
  '36055777287055',
  '36755520879112',
  '36909931973390',
  '30125797171344',
  '30172162676481',
  '30092108379679',
  '38512091997007',
  '30095612829386',
  '30335636218988',
  '30202382641492',
  '38763708280614',
  '30177358246072',
  '30222985778483',
  '38057488587656',
  '30025515526490',
  '30225928901237',
  '30230133872470',
  '36229365856015',
  '36363811610153',
  '30350055292083',
  '30079242677274',
  '30151746275572',
  '36506990305066',
  '36975152158730',
  '38765432739526',
  '30008319658115',
  '36013706113603',
  '30058729925463',
  '30106377344279',
  '30078786567784',
  '30278456417274',
  '36501414470901',
  '30171016912514',
  '38126658758445',
  '30227061614304',
  '30015417611680',
  '30030546723546',
  '30276696730126',
  '30121835140813',
]

const JCB: string[] = [
  '3538401152955980',
  '3581290624902191',
  '3560289696155006',
  '3538337566012333',
  '3504427548183219',
  '3537134447121842',
  '3583919643141914',
  '3526480851173974',
  '3523630973694751',
  '3599746221623787',
  '3543728038428961',
  '3531900441149310',
  '3582381990926515',
  '3583789262522987',
  '3529168966852205',
  '3545202979839907',
  '3529423350979068',
  '3549360069782159',
  '3596144907472690',
  '3580887094345768',
  '3502332035962855',
  '3574921746336723',
  '3596320230412674',
  '3559705631865543',
  '3542433765912573',
  '3527712709029779',
  '3581964879696209',
  '3585297914929020',
  '3537795293911831',
  '3520546122522995',
  '3597010205665690',
  '3587987656762666',
  '3511235128236716',
  '3587718314676794',
  '3500278409448074',
  '3509173789871493',
]

const HIPERCARD: string[] = [
  '6062820730085134',
  '6062825899683496',
  '6062828831542382',
  '6062826967431917',
  '6062828587546389',
  '6062828099133460',
]

const ELO: string[] = [
  '5041758347234513',
  '4389354924114808',
  '5090550136768011',
  '4389352112093529',
  '5067225474546589',
  '6505070035072339',
]

describe('testing index file - getBrand()', () => {
  test('Visa Brand', () => {
    VISA.forEach((cardNumber) => {
      expect(getBrand(cardNumber)?.code).toBe('visa')
    })
  })

  test('Mastercard Brand', () => {
    MASTERCARD.forEach((cardNumber) => {
      expect(getBrand(cardNumber)?.code).toBe('mastercard')
    })
  })

  test('Maestro Brand', () => {
    MAESTRO.forEach((cardNumber) => {
      expect(getBrand(cardNumber)?.code).toBe('maestro')
    })
  })

  test('American Express Brand', () => {
    AMEX.forEach((cardNumber) => {
      expect(getBrand(cardNumber)?.code).toBe('amex')
    })
  })

  test('Discover Brand', () => {
    DISCOVER.forEach((cardNumber) => {
      expect(getBrand(cardNumber)?.code).toBe('discover')
    })
  })

  test('Diners Club Brand', () => {
    DINERS.forEach((cardNumber) => {
      expect(getBrand(cardNumber)?.code).toBe('diners')
    })
  })

  test('JCB Brand', () => {
    JCB.forEach((cardNumber) => {
      expect(getBrand(cardNumber)?.code).toBe('jcb')
    })
  })

  test('HiperCard Brand', () => {
    HIPERCARD.forEach((cardNumber) => {
      expect(getBrand(cardNumber)?.code).toBe('hipercard')
    })
  })

  test('ELO Brand', () => {
    ELO.forEach((cardNumber) => {
      expect(getBrand(cardNumber)?.code).toBe('elo')
    })
  })
})