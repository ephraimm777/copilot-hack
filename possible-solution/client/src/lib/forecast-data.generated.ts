import type { Airport, FlightPrediction } from './models';

export const forecastData: {
	airports: Airport[];
	forecasts: Record<string, FlightPrediction>;
} = {
  "airports": [
    {
      "id": 10140,
      "name": "Albuquerque International Sunport"
    },
    {
      "id": 10423,
      "name": "Austin - Bergstrom International"
    },
    {
      "id": 10821,
      "name": "Baltimore/Washington International Thurgood Marshall"
    },
    {
      "id": 10800,
      "name": "Bob Hope"
    },
    {
      "id": 10529,
      "name": "Bradley International"
    },
    {
      "id": 10792,
      "name": "Buffalo Niagara International"
    },
    {
      "id": 11057,
      "name": "Charlotte Douglas International"
    },
    {
      "id": 13232,
      "name": "Chicago Midway International"
    },
    {
      "id": 13930,
      "name": "Chicago O'Hare International"
    },
    {
      "id": 11193,
      "name": "Cincinnati/Northern Kentucky International"
    },
    {
      "id": 11042,
      "name": "Cleveland-Hopkins International"
    },
    {
      "id": 11259,
      "name": "Dallas Love Field"
    },
    {
      "id": 11298,
      "name": "Dallas/Fort Worth International"
    },
    {
      "id": 11292,
      "name": "Denver International"
    },
    {
      "id": 11433,
      "name": "Detroit Metro Wayne County"
    },
    {
      "id": 13871,
      "name": "Eppley Airfield"
    },
    {
      "id": 11697,
      "name": "Fort Lauderdale-Hollywood International"
    },
    {
      "id": 13342,
      "name": "General Mitchell International"
    },
    {
      "id": 12266,
      "name": "George Bush Intercontinental/Houston"
    },
    {
      "id": 10397,
      "name": "Hartsfield-Jackson Atlanta International"
    },
    {
      "id": 12173,
      "name": "Honolulu International"
    },
    {
      "id": 12339,
      "name": "Indianapolis International"
    },
    {
      "id": 12451,
      "name": "Jacksonville International"
    },
    {
      "id": 12478,
      "name": "John F. Kennedy International"
    },
    {
      "id": 14908,
      "name": "John Wayne Airport-Orange County"
    },
    {
      "id": 13830,
      "name": "Kahului Airport"
    },
    {
      "id": 13198,
      "name": "Kansas City International"
    },
    {
      "id": 12953,
      "name": "LaGuardia"
    },
    {
      "id": 15016,
      "name": "Lambert-St. Louis International"
    },
    {
      "id": 10721,
      "name": "Logan International"
    },
    {
      "id": 12954,
      "name": "Long Beach Airport"
    },
    {
      "id": 12892,
      "name": "Los Angeles International"
    },
    {
      "id": 13495,
      "name": "Louis Armstrong New Orleans International"
    },
    {
      "id": 14730,
      "name": "Louisville International-Standiford Field"
    },
    {
      "id": 14843,
      "name": "Luis Munoz Marin International"
    },
    {
      "id": 12889,
      "name": "McCarran International"
    },
    {
      "id": 13244,
      "name": "Memphis International"
    },
    {
      "id": 13796,
      "name": "Metropolitan Oakland International"
    },
    {
      "id": 13303,
      "name": "Miami International"
    },
    {
      "id": 13487,
      "name": "Minneapolis-St Paul International"
    },
    {
      "id": 10693,
      "name": "Nashville International"
    },
    {
      "id": 11618,
      "name": "Newark Liberty International"
    },
    {
      "id": 13931,
      "name": "Norfolk International"
    },
    {
      "id": 14831,
      "name": "Norman Y. Mineta San Jose International"
    },
    {
      "id": 13891,
      "name": "Ontario International"
    },
    {
      "id": 13204,
      "name": "Orlando International"
    },
    {
      "id": 14027,
      "name": "Palm Beach International"
    },
    {
      "id": 14100,
      "name": "Philadelphia International"
    },
    {
      "id": 14107,
      "name": "Phoenix Sky Harbor International"
    },
    {
      "id": 14122,
      "name": "Pittsburgh International"
    },
    {
      "id": 11066,
      "name": "Port Columbus International"
    },
    {
      "id": 14057,
      "name": "Portland International"
    },
    {
      "id": 14492,
      "name": "Raleigh-Durham International"
    },
    {
      "id": 14570,
      "name": "Reno/Tahoe International"
    },
    {
      "id": 14524,
      "name": "Richmond International"
    },
    {
      "id": 11278,
      "name": "Ronald Reagan Washington National"
    },
    {
      "id": 14893,
      "name": "Sacramento International"
    },
    {
      "id": 14869,
      "name": "Salt Lake City International"
    },
    {
      "id": 14683,
      "name": "San Antonio International"
    },
    {
      "id": 14679,
      "name": "San Diego International"
    },
    {
      "id": 14771,
      "name": "San Francisco International"
    },
    {
      "id": 14747,
      "name": "Seattle/Tacoma International"
    },
    {
      "id": 14635,
      "name": "Southwest Florida International"
    },
    {
      "id": 15304,
      "name": "Tampa International"
    },
    {
      "id": 10299,
      "name": "Ted Stevens Anchorage International"
    },
    {
      "id": 14307,
      "name": "Theodore Francis Green State"
    },
    {
      "id": 15376,
      "name": "Tucson International"
    },
    {
      "id": 12264,
      "name": "Washington Dulles International"
    },
    {
      "id": 13851,
      "name": "Will Rogers World"
    },
    {
      "id": 12191,
      "name": "William P Hobby"
    }
  ],
  "forecasts": {
    "1:10140": {
      "confidence": 0.9272238330891788,
      "delay_probability": 0.07277616691082125,
      "on_time_probability": 0.9272238330891788
    },
    "1:10299": {
      "confidence": 0.9298710506396427,
      "delay_probability": 0.07012894936035725,
      "on_time_probability": 0.9298710506396427
    },
    "1:10397": {
      "confidence": 0.9314580390159449,
      "delay_probability": 0.06854196098405509,
      "on_time_probability": 0.9314580390159449
    },
    "1:10423": {
      "confidence": 0.9318734590655902,
      "delay_probability": 0.06812654093440983,
      "on_time_probability": 0.9318734590655902
    },
    "1:10529": {
      "confidence": 0.9335430477041343,
      "delay_probability": 0.06645695229586564,
      "on_time_probability": 0.9335430477041343
    },
    "1:10693": {
      "confidence": 0.9360514312378794,
      "delay_probability": 0.06394856876212066,
      "on_time_probability": 0.9360514312378794
    },
    "1:10721": {
      "confidence": 0.9364707795098401,
      "delay_probability": 0.06352922049015984,
      "on_time_probability": 0.9364707795098401
    },
    "1:10792": {
      "confidence": 0.937522661222788,
      "delay_probability": 0.062477338777211976,
      "on_time_probability": 0.937522661222788
    },
    "1:10800": {
      "confidence": 0.9376401589839913,
      "delay_probability": 0.06235984101600866,
      "on_time_probability": 0.9376401589839913
    },
    "1:10821": {
      "confidence": 0.9379476098555672,
      "delay_probability": 0.06205239014443276,
      "on_time_probability": 0.9379476098555672
    },
    "1:11042": {
      "confidence": 0.9410983635882102,
      "delay_probability": 0.058901636411789825,
      "on_time_probability": 0.9410983635882102
    },
    "1:11057": {
      "confidence": 0.9413066924083158,
      "delay_probability": 0.05869330759168419,
      "on_time_probability": 0.9413066924083158
    },
    "1:11066": {
      "confidence": 0.9414313578725766,
      "delay_probability": 0.05856864212742344,
      "on_time_probability": 0.9414313578725766
    },
    "1:11193": {
      "confidence": 0.9431642450024601,
      "delay_probability": 0.05683575499753994,
      "on_time_probability": 0.9431642450024601
    },
    "1:11259": {
      "confidence": 0.9440456662814976,
      "delay_probability": 0.05595433371850239,
      "on_time_probability": 0.9440456662814976
    },
    "1:11278": {
      "confidence": 0.9442970155945901,
      "delay_probability": 0.055702984405409835,
      "on_time_probability": 0.9442970155945901
    },
    "1:11292": {
      "confidence": 0.9444815400896948,
      "delay_probability": 0.05551845991030529,
      "on_time_probability": 0.9444815400896948
    },
    "1:11298": {
      "confidence": 0.9445604457684177,
      "delay_probability": 0.05543955423158236,
      "on_time_probability": 0.9445604457684177
    },
    "1:11433": {
      "confidence": 0.9463081444630225,
      "delay_probability": 0.053691855536977556,
      "on_time_probability": 0.9463081444630225
    },
    "1:11618": {
      "confidence": 0.9486188562257143,
      "delay_probability": 0.05138114377428567,
      "on_time_probability": 0.9486188562257143
    },
    "1:11697": {
      "confidence": 0.9495766666122276,
      "delay_probability": 0.05042333338777242,
      "on_time_probability": 0.9495766666122276
    },
    "1:12173": {
      "confidence": 0.9549988708519144,
      "delay_probability": 0.04500112914808557,
      "on_time_probability": 0.9549988708519144
    },
    "1:12191": {
      "confidence": 0.9551926125409812,
      "delay_probability": 0.04480738745901881,
      "on_time_probability": 0.9551926125409812
    },
    "1:12264": {
      "confidence": 0.9559702218255988,
      "delay_probability": 0.044029778174401187,
      "on_time_probability": 0.9559702218255988
    },
    "1:12266": {
      "confidence": 0.955991343981701,
      "delay_probability": 0.044008656018299,
      "on_time_probability": 0.955991343981701
    },
    "1:12339": {
      "confidence": 0.9567557192436857,
      "delay_probability": 0.04324428075631426,
      "on_time_probability": 0.9567557192436857
    },
    "1:12451": {
      "confidence": 0.9579038624572146,
      "delay_probability": 0.04209613754278544,
      "on_time_probability": 0.9579038624572146
    },
    "1:12478": {
      "confidence": 0.9581762565089263,
      "delay_probability": 0.04182374349107364,
      "on_time_probability": 0.9581762565089263
    },
    "1:12889": {
      "confidence": 0.9621199672694585,
      "delay_probability": 0.03788003273054152,
      "on_time_probability": 0.9621199672694585
    },
    "1:12892": {
      "confidence": 0.9621473973140378,
      "delay_probability": 0.03785260268596222,
      "on_time_probability": 0.9621473973140378
    },
    "1:12953": {
      "confidence": 0.962701019814464,
      "delay_probability": 0.03729898018553606,
      "on_time_probability": 0.962701019814464
    },
    "1:12954": {
      "confidence": 0.9627100304358708,
      "delay_probability": 0.03728996956412918,
      "on_time_probability": 0.9627100304358708
    },
    "1:13198": {
      "confidence": 0.9648471449143248,
      "delay_probability": 0.035152855085675186,
      "on_time_probability": 0.9648471449143248
    },
    "1:13204": {
      "confidence": 0.9648981816849328,
      "delay_probability": 0.035101818315067174,
      "on_time_probability": 0.9648981816849328
    },
    "1:13232": {
      "confidence": 0.9651354106215664,
      "delay_probability": 0.034864589378433654,
      "on_time_probability": 0.9651354106215664
    },
    "1:13244": {
      "confidence": 0.9652366064409035,
      "delay_probability": 0.0347633935590965,
      "on_time_probability": 0.9652366064409035
    },
    "1:13303": {
      "confidence": 0.9657300475865688,
      "delay_probability": 0.03426995241343126,
      "on_time_probability": 0.9657300475865688
    },
    "1:13342": {
      "confidence": 0.9660525047141615,
      "delay_probability": 0.03394749528583856,
      "on_time_probability": 0.9660525047141615
    },
    "1:13487": {
      "confidence": 0.9672258946604763,
      "delay_probability": 0.032774105339523775,
      "on_time_probability": 0.9672258946604763
    },
    "1:13495": {
      "confidence": 0.9672894801734336,
      "delay_probability": 0.03271051982656637,
      "on_time_probability": 0.9672894801734336
    },
    "1:13796": {
      "confidence": 0.9695970866204529,
      "delay_probability": 0.030402913379547182,
      "on_time_probability": 0.9695970866204529
    },
    "1:13830": {
      "confidence": 0.9698476184054502,
      "delay_probability": 0.030152381594549804,
      "on_time_probability": 0.9698476184054502
    },
    "1:13851": {
      "confidence": 0.9700013581344681,
      "delay_probability": 0.029998641865531864,
      "on_time_probability": 0.9700013581344681
    },
    "1:13871": {
      "confidence": 0.9701470705202622,
      "delay_probability": 0.029852929479737854,
      "on_time_probability": 0.9701470705202622
    },
    "1:13891": {
      "confidence": 0.9702920968139608,
      "delay_probability": 0.02970790318603917,
      "on_time_probability": 0.9702920968139608
    },
    "1:13930": {
      "confidence": 0.9705729361423888,
      "delay_probability": 0.029427063857611166,
      "on_time_probability": 0.9705729361423888
    },
    "1:13931": {
      "confidence": 0.9705801031951895,
      "delay_probability": 0.029419896804810542,
      "on_time_probability": 0.9705801031951895
    },
    "1:14027": {
      "confidence": 0.9712603141399536,
      "delay_probability": 0.02873968586004639,
      "on_time_probability": 0.9712603141399536
    },
    "1:14057": {
      "confidence": 0.9714697328359544,
      "delay_probability": 0.028530267164045598,
      "on_time_probability": 0.9714697328359544
    },
    "1:14100": {
      "confidence": 0.9717673185727074,
      "delay_probability": 0.028232681427292617,
      "on_time_probability": 0.9717673185727074
    },
    "1:14107": {
      "confidence": 0.9718154766723397,
      "delay_probability": 0.02818452332766027,
      "on_time_probability": 0.9718154766723397
    },
    "1:14122": {
      "confidence": 0.9719184041540937,
      "delay_probability": 0.028081595845906308,
      "on_time_probability": 0.9719184041540937
    },
    "1:14307": {
      "confidence": 0.9731582018957263,
      "delay_probability": 0.026841798104273725,
      "on_time_probability": 0.9731582018957263
    },
    "1:14492": {
      "confidence": 0.9743447076395266,
      "delay_probability": 0.02565529236047335,
      "on_time_probability": 0.9743447076395266
    },
    "1:14524": {
      "confidence": 0.9745446950979848,
      "delay_probability": 0.025455304902015145,
      "on_time_probability": 0.9745446950979848
    },
    "1:14570": {
      "confidence": 0.9748295194704103,
      "delay_probability": 0.025170480529589728,
      "on_time_probability": 0.9748295194704103
    },
    "1:14635": {
      "confidence": 0.9752267016489825,
      "delay_probability": 0.02477329835101744,
      "on_time_probability": 0.9752267016489825
    },
    "1:14679": {
      "confidence": 0.975492089716609,
      "delay_probability": 0.02450791028339108,
      "on_time_probability": 0.975492089716609
    },
    "1:14683": {
      "confidence": 0.9755160780192688,
      "delay_probability": 0.02448392198073128,
      "on_time_probability": 0.9755160780192688
    },
    "1:14730": {
      "confidence": 0.9757962314420198,
      "delay_probability": 0.024203768557980263,
      "on_time_probability": 0.9757962314420198
    },
    "1:14747": {
      "confidence": 0.9758967917212403,
      "delay_probability": 0.02410320827875967,
      "on_time_probability": 0.9758967917212403
    },
    "1:14771": {
      "confidence": 0.9760380657622055,
      "delay_probability": 0.023961934237794438,
      "on_time_probability": 0.9760380657622055
    },
    "1:14831": {
      "confidence": 0.9763877262120639,
      "delay_probability": 0.023612273787936067,
      "on_time_probability": 0.9763877262120639
    },
    "1:14843": {
      "confidence": 0.9764570584456832,
      "delay_probability": 0.023542941554316812,
      "on_time_probability": 0.9764570584456832
    },
    "1:14869": {
      "confidence": 0.9766065974082917,
      "delay_probability": 0.023393402591708336,
      "on_time_probability": 0.9766065974082917
    },
    "1:14893": {
      "confidence": 0.9767438102697501,
      "delay_probability": 0.02325618973024987,
      "on_time_probability": 0.9767438102697501
    },
    "1:14908": {
      "confidence": 0.9768291690162165,
      "delay_probability": 0.023170830983783502,
      "on_time_probability": 0.9768291690162165
    },
    "1:15016": {
      "confidence": 0.9774347853470433,
      "delay_probability": 0.022565214652956717,
      "on_time_probability": 0.9774347853470433
    },
    "1:15304": {
      "confidence": 0.9789751369031516,
      "delay_probability": 0.021024863096848357,
      "on_time_probability": 0.9789751369031516
    },
    "1:15376": {
      "confidence": 0.9793438595387964,
      "delay_probability": 0.020656140461203582,
      "on_time_probability": 0.9793438595387964
    },
    "2:10140": {
      "confidence": 0.927223840062849,
      "delay_probability": 0.07277615993715097,
      "on_time_probability": 0.927223840062849
    },
    "2:10299": {
      "confidence": 0.9298710573788328,
      "delay_probability": 0.07012894262116717,
      "on_time_probability": 0.9298710573788328
    },
    "2:10397": {
      "confidence": 0.9314580456138714,
      "delay_probability": 0.06854195438612869,
      "on_time_probability": 0.9314580456138714
    },
    "2:10423": {
      "confidence": 0.9318734656264526,
      "delay_probability": 0.06812653437354746,
      "on_time_probability": 0.9318734656264526
    },
    "2:10529": {
      "confidence": 0.9335430541156753,
      "delay_probability": 0.06645694588432476,
      "on_time_probability": 0.9335430541156753
    },
    "2:10693": {
      "confidence": 0.9360514374239972,
      "delay_probability": 0.06394856257600284,
      "on_time_probability": 0.9360514374239972
    },
    "2:10721": {
      "confidence": 0.9364707856581451,
      "delay_probability": 0.06352921434185485,
      "on_time_probability": 0.9364707856581451
    },
    "2:10792": {
      "confidence": 0.9375226672760845,
      "delay_probability": 0.06247733272391555,
      "on_time_probability": 0.9375226672760845
    },
    "2:10800": {
      "confidence": 0.9376401650266609,
      "delay_probability": 0.0623598349733391,
      "on_time_probability": 0.9376401650266609
    },
    "2:10821": {
      "confidence": 0.9379476158704164,
      "delay_probability": 0.062052384129583596,
      "on_time_probability": 0.9379476158704164
    },
    "2:11042": {
      "confidence": 0.9410983693168303,
      "delay_probability": 0.0589016306831697,
      "on_time_probability": 0.9410983693168303
    },
    "2:11057": {
      "confidence": 0.9413066981179381,
      "delay_probability": 0.05869330188206192,
      "on_time_probability": 0.9413066981179381
    },
    "2:11066": {
      "confidence": 0.941431363570826,
      "delay_probability": 0.058568636429173926,
      "on_time_probability": 0.941431363570826
    },
    "2:11193": {
      "confidence": 0.9431642505422922,
      "delay_probability": 0.05683574945770777,
      "on_time_probability": 0.9431642505422922
    },
    "2:11259": {
      "confidence": 0.9440456717405137,
      "delay_probability": 0.05595432825948626,
      "on_time_probability": 0.9440456717405137
    },
    "2:11278": {
      "confidence": 0.944297021030531,
      "delay_probability": 0.05570297896946892,
      "on_time_probability": 0.944297021030531
    },
    "2:11292": {
      "confidence": 0.944481545508687,
      "delay_probability": 0.05551845449131304,
      "on_time_probability": 0.944481545508687
    },
    "2:11298": {
      "confidence": 0.9445604511801602,
      "delay_probability": 0.05543954881983979,
      "on_time_probability": 0.9445604511801602
    },
    "2:11433": {
      "confidence": 0.9463081497138607,
      "delay_probability": 0.053691850286139355,
      "on_time_probability": 0.9463081497138607
    },
    "2:11618": {
      "confidence": 0.9486188612628444,
      "delay_probability": 0.05138113873715559,
      "on_time_probability": 0.9486188612628444
    },
    "2:11697": {
      "confidence": 0.9495766715604502,
      "delay_probability": 0.05042332843954978,
      "on_time_probability": 0.9495766715604502
    },
    "2:12173": {
      "confidence": 0.9549988752932533,
      "delay_probability": 0.04500112470674667,
      "on_time_probability": 0.9549988752932533
    },
    "2:12191": {
      "confidence": 0.9551926169640961,
      "delay_probability": 0.0448073830359039,
      "on_time_probability": 0.9551926169640961
    },
    "2:12264": {
      "confidence": 0.9559702261754911,
      "delay_probability": 0.044029773824508865,
      "on_time_probability": 0.9559702261754911
    },
    "2:12266": {
      "confidence": 0.9559913483296026,
      "delay_probability": 0.04400865167039736,
      "on_time_probability": 0.9559913483296026
    },
    "2:12339": {
      "confidence": 0.9567557235194858,
      "delay_probability": 0.04324427648051418,
      "on_time_probability": 0.9567557235194858
    },
    "2:12451": {
      "confidence": 0.9579038666244862,
      "delay_probability": 0.042096133375513725,
      "on_time_probability": 0.9579038666244862
    },
    "2:12478": {
      "confidence": 0.9581762606504101,
      "delay_probability": 0.04182373934958998,
      "on_time_probability": 0.9581762606504101
    },
    "2:12889": {
      "confidence": 0.9621199710358652,
      "delay_probability": 0.037880028964134775,
      "on_time_probability": 0.9621199710358652
    },
    "2:12892": {
      "confidence": 0.9621474010778245,
      "delay_probability": 0.03785259892217554,
      "on_time_probability": 0.9621474010778245
    },
    "2:12953": {
      "confidence": 0.9627010235253365,
      "delay_probability": 0.03729897647466354,
      "on_time_probability": 0.9627010235253365
    },
    "2:12954": {
      "confidence": 0.9627100341458816,
      "delay_probability": 0.03728996585411841,
      "on_time_probability": 0.9627100341458816
    },
    "2:13198": {
      "confidence": 0.964847148419476,
      "delay_probability": 0.035152851580523926,
      "on_time_probability": 0.964847148419476
    },
    "2:13204": {
      "confidence": 0.9648981851851802,
      "delay_probability": 0.035101814814819735,
      "on_time_probability": 0.9648981851851802
    },
    "2:13232": {
      "confidence": 0.9651354140990128,
      "delay_probability": 0.03486458590098722,
      "on_time_probability": 0.9651354140990128
    },
    "2:13244": {
      "confidence": 0.96523660990862,
      "delay_probability": 0.03476339009137993,
      "on_time_probability": 0.96523660990862
    },
    "2:13303": {
      "confidence": 0.9657300510068112,
      "delay_probability": 0.03426994899318883,
      "on_time_probability": 0.9657300510068112
    },
    "2:13342": {
      "confidence": 0.966052508103353,
      "delay_probability": 0.03394749189664704,
      "on_time_probability": 0.966052508103353
    },
    "2:13487": {
      "confidence": 0.9672258979364952,
      "delay_probability": 0.032774102063504826,
      "on_time_probability": 0.9672258979364952
    },
    "2:13495": {
      "confidence": 0.9672894834433117,
      "delay_probability": 0.032710516556688336,
      "on_time_probability": 0.9672894834433117
    },
    "2:13796": {
      "confidence": 0.9695970896669035,
      "delay_probability": 0.030402910333096517,
      "on_time_probability": 0.9695970896669035
    },
    "2:13830": {
      "confidence": 0.9698476214275776,
      "delay_probability": 0.030152378572422405,
      "on_time_probability": 0.9698476214275776
    },
    "2:13851": {
      "confidence": 0.970001361141663,
      "delay_probability": 0.029998638858336934,
      "on_time_probability": 0.970001361141663
    },
    "2:13871": {
      "confidence": 0.9701470735132998,
      "delay_probability": 0.029852926486700234,
      "on_time_probability": 0.9701470735132998
    },
    "2:13891": {
      "confidence": 0.9702920997929034,
      "delay_probability": 0.02970790020709655,
      "on_time_probability": 0.9702920997929034
    },
    "2:13930": {
      "confidence": 0.9705729390940245,
      "delay_probability": 0.029427060905975477,
      "on_time_probability": 0.9705729390940245
    },
    "2:13931": {
      "confidence": 0.9705801061461281,
      "delay_probability": 0.02941989385387194,
      "on_time_probability": 0.9705801061461281
    },
    "2:14027": {
      "confidence": 0.9712603170246845,
      "delay_probability": 0.0287396829753155,
      "on_time_probability": 0.9712603170246845
    },
    "2:14057": {
      "confidence": 0.9714697357002825,
      "delay_probability": 0.028530264299717546,
      "on_time_probability": 0.9714697357002825
    },
    "2:14100": {
      "confidence": 0.9717673214080272,
      "delay_probability": 0.028232678591972746,
      "on_time_probability": 0.9717673214080272
    },
    "2:14107": {
      "confidence": 0.9718154795029635,
      "delay_probability": 0.0281845204970365,
      "on_time_probability": 0.9718154795029635
    },
    "2:14122": {
      "confidence": 0.971918406974679,
      "delay_probability": 0.02808159302532103,
      "on_time_probability": 0.971918406974679
    },
    "2:14307": {
      "confidence": 0.9731582045952223,
      "delay_probability": 0.02684179540477767,
      "on_time_probability": 0.9731582045952223
    },
    "2:14492": {
      "confidence": 0.974344710222841,
      "delay_probability": 0.025655289777159078,
      "on_time_probability": 0.974344710222841
    },
    "2:14524": {
      "confidence": 0.9745446976616878,
      "delay_probability": 0.02545530233831216,
      "on_time_probability": 0.9745446976616878
    },
    "2:14570": {
      "confidence": 0.9748295220061683,
      "delay_probability": 0.025170477993831625,
      "on_time_probability": 0.9748295220061683
    },
    "2:14635": {
      "confidence": 0.9752267041457441,
      "delay_probability": 0.02477329585425593,
      "on_time_probability": 0.9752267041457441
    },
    "2:14679": {
      "confidence": 0.9754920921872956,
      "delay_probability": 0.02450790781270437,
      "on_time_probability": 0.9754920921872956
    },
    "2:14683": {
      "confidence": 0.9755160804875979,
      "delay_probability": 0.024483919512402183,
      "on_time_probability": 0.9755160804875979
    },
    "2:14730": {
      "confidence": 0.9757962338828061,
      "delay_probability": 0.024203766117193878,
      "on_time_probability": 0.9757962338828061
    },
    "2:14747": {
      "confidence": 0.9758967941521364,
      "delay_probability": 0.02410320584786362,
      "on_time_probability": 0.9758967941521364
    },
    "2:14771": {
      "confidence": 0.9760380681792035,
      "delay_probability": 0.023961931820796548,
      "on_time_probability": 0.9760380681792035
    },
    "2:14831": {
      "confidence": 0.9763877285946454,
      "delay_probability": 0.023612271405354567,
      "on_time_probability": 0.9763877285946454
    },
    "2:14843": {
      "confidence": 0.9764570608214375,
      "delay_probability": 0.023542939178562542,
      "on_time_probability": 0.9764570608214375
    },
    "2:14869": {
      "confidence": 0.9766065997693173,
      "delay_probability": 0.023393400230682756,
      "on_time_probability": 0.9766065997693173
    },
    "2:14893": {
      "confidence": 0.976743812617257,
      "delay_probability": 0.023256187382742995,
      "on_time_probability": 0.976743812617257
    },
    "2:14908": {
      "confidence": 0.9768291713553116,
      "delay_probability": 0.023170828644688436,
      "on_time_probability": 0.9768291713553116
    },
    "2:15016": {
      "confidence": 0.9774347876264137,
      "delay_probability": 0.022565212373586316,
      "on_time_probability": 0.9774347876264137
    },
    "2:15304": {
      "confidence": 0.978975139030274,
      "delay_probability": 0.02102486096972595,
      "on_time_probability": 0.978975139030274
    },
    "2:15376": {
      "confidence": 0.9793438616294016,
      "delay_probability": 0.020656138370598383,
      "on_time_probability": 0.9793438616294016
    },
    "3:10140": {
      "confidence": 0.9272238470365186,
      "delay_probability": 0.07277615296348133,
      "on_time_probability": 0.9272238470365186
    },
    "3:10299": {
      "confidence": 0.9298710641180222,
      "delay_probability": 0.07012893588197773,
      "on_time_probability": 0.9298710641180222
    },
    "3:10397": {
      "confidence": 0.9314580522117971,
      "delay_probability": 0.06854194778820291,
      "on_time_probability": 0.9314580522117971
    },
    "3:10423": {
      "confidence": 0.9318734721873143,
      "delay_probability": 0.06812652781268572,
      "on_time_probability": 0.9318734721873143
    },
    "3:10529": {
      "confidence": 0.9335430605272155,
      "delay_probability": 0.06645693947278448,
      "on_time_probability": 0.9335430605272155
    },
    "3:10693": {
      "confidence": 0.9360514436101144,
      "delay_probability": 0.06394855638988563,
      "on_time_probability": 0.9360514436101144
    },
    "3:10721": {
      "confidence": 0.9364707918064495,
      "delay_probability": 0.06352920819355044,
      "on_time_probability": 0.9364707918064495
    },
    "3:10792": {
      "confidence": 0.9375226733293803,
      "delay_probability": 0.062477326670619684,
      "on_time_probability": 0.9375226733293803
    },
    "3:10800": {
      "confidence": 0.9376401710693298,
      "delay_probability": 0.06235982893067013,
      "on_time_probability": 0.9376401710693298
    },
    "3:10821": {
      "confidence": 0.937947621885265,
      "delay_probability": 0.062052378114735005,
      "on_time_probability": 0.937947621885265
    },
    "3:11042": {
      "confidence": 0.9410983750454499,
      "delay_probability": 0.05890162495455012,
      "on_time_probability": 0.9410983750454499
    },
    "3:11057": {
      "confidence": 0.9413067038275598,
      "delay_probability": 0.05869329617244022,
      "on_time_probability": 0.9413067038275598
    },
    "3:11066": {
      "confidence": 0.941431369269075,
      "delay_probability": 0.05856863073092498,
      "on_time_probability": 0.941431369269075
    },
    "3:11193": {
      "confidence": 0.9431642560821238,
      "delay_probability": 0.05683574391787615,
      "on_time_probability": 0.9431642560821238
    },
    "3:11259": {
      "confidence": 0.9440456771995294,
      "delay_probability": 0.05595432280047066,
      "on_time_probability": 0.9440456771995294
    },
    "3:11278": {
      "confidence": 0.9442970264664714,
      "delay_probability": 0.055702973533528544,
      "on_time_probability": 0.9442970264664714
    },
    "3:11292": {
      "confidence": 0.9444815509276787,
      "delay_probability": 0.055518449072321306,
      "on_time_probability": 0.9444815509276787
    },
    "3:11298": {
      "confidence": 0.9445604565919022,
      "delay_probability": 0.055439543408097716,
      "on_time_probability": 0.9445604565919022
    },
    "3:11433": {
      "confidence": 0.9463081549646983,
      "delay_probability": 0.053691845035301666,
      "on_time_probability": 0.9463081549646983
    },
    "3:11618": {
      "confidence": 0.948618866299974,
      "delay_probability": 0.051381133700026,
      "on_time_probability": 0.948618866299974
    },
    "3:11697": {
      "confidence": 0.9495766765086724,
      "delay_probability": 0.05042332349132761,
      "on_time_probability": 0.9495766765086724
    },
    "3:12173": {
      "confidence": 0.9549988797345919,
      "delay_probability": 0.0450011202654082,
      "on_time_probability": 0.9549988797345919
    },
    "3:12191": {
      "confidence": 0.9551926213872106,
      "delay_probability": 0.04480737861278942,
      "on_time_probability": 0.9551926213872106
    },
    "3:12264": {
      "confidence": 0.955970230525383,
      "delay_probability": 0.04402976947461697,
      "on_time_probability": 0.955970230525383
    },
    "3:12266": {
      "confidence": 0.9559913526775039,
      "delay_probability": 0.04400864732249615,
      "on_time_probability": 0.9559913526775039
    },
    "3:12339": {
      "confidence": 0.9567557277952855,
      "delay_probability": 0.04324427220471453,
      "on_time_probability": 0.9567557277952855
    },
    "3:12451": {
      "confidence": 0.9579038707917575,
      "delay_probability": 0.04209612920824241,
      "on_time_probability": 0.9579038707917575
    },
    "3:12478": {
      "confidence": 0.9581762647918932,
      "delay_probability": 0.041823735208106734,
      "on_time_probability": 0.9581762647918932
    },
    "3:12889": {
      "confidence": 0.9621199748022716,
      "delay_probability": 0.03788002519772842,
      "on_time_probability": 0.9621199748022716
    },
    "3:12892": {
      "confidence": 0.9621474048416108,
      "delay_probability": 0.03785259515838924,
      "on_time_probability": 0.9621474048416108
    },
    "3:12953": {
      "confidence": 0.9627010272362087,
      "delay_probability": 0.037298972763791405,
      "on_time_probability": 0.9627010272362087
    },
    "3:12954": {
      "confidence": 0.9627100378558919,
      "delay_probability": 0.03728996214410801,
      "on_time_probability": 0.9627100378558919
    },
    "3:13198": {
      "confidence": 0.964847151924627,
      "delay_probability": 0.035152848075373014,
      "on_time_probability": 0.964847151924627
    },
    "3:13204": {
      "confidence": 0.9648981886854273,
      "delay_probability": 0.03510181131457264,
      "on_time_probability": 0.9648981886854273
    },
    "3:13232": {
      "confidence": 0.9651354175764588,
      "delay_probability": 0.03486458242354113,
      "on_time_probability": 0.9651354175764588
    },
    "3:13244": {
      "confidence": 0.9652366133763363,
      "delay_probability": 0.034763386623663704,
      "on_time_probability": 0.9652366133763363
    },
    "3:13303": {
      "confidence": 0.9657300544270533,
      "delay_probability": 0.03426994557294675,
      "on_time_probability": 0.9657300544270533
    },
    "3:13342": {
      "confidence": 0.9660525114925441,
      "delay_probability": 0.033947488507455846,
      "on_time_probability": 0.9660525114925441
    },
    "3:13487": {
      "confidence": 0.9672259012125138,
      "delay_probability": 0.03277409878748621,
      "on_time_probability": 0.9672259012125138
    },
    "3:13495": {
      "confidence": 0.9672894867131894,
      "delay_probability": 0.03271051328681062,
      "on_time_probability": 0.9672894867131894
    },
    "3:13796": {
      "confidence": 0.9695970927133538,
      "delay_probability": 0.03040290728664618,
      "on_time_probability": 0.9695970927133538
    },
    "3:13830": {
      "confidence": 0.9698476244497047,
      "delay_probability": 0.030152375550295308,
      "on_time_probability": 0.9698476244497047
    },
    "3:13851": {
      "confidence": 0.9700013641488576,
      "delay_probability": 0.02999863585114232,
      "on_time_probability": 0.9700013641488576
    },
    "3:13871": {
      "confidence": 0.9701470765063371,
      "delay_probability": 0.029852923493662913,
      "on_time_probability": 0.9701470765063371
    },
    "3:13891": {
      "confidence": 0.9702921027718457,
      "delay_probability": 0.029707897228154225,
      "on_time_probability": 0.9702921027718457
    },
    "3:13930": {
      "confidence": 0.9705729420456599,
      "delay_probability": 0.029427057954340082,
      "on_time_probability": 0.9705729420456599
    },
    "3:13931": {
      "confidence": 0.9705801090970664,
      "delay_probability": 0.02941989090293364,
      "on_time_probability": 0.9705801090970664
    },
    "3:14027": {
      "confidence": 0.9712603199094151,
      "delay_probability": 0.028739680090584904,
      "on_time_probability": 0.9712603199094151
    },
    "3:14057": {
      "confidence": 0.9714697385646103,
      "delay_probability": 0.02853026143538978,
      "on_time_probability": 0.9714697385646103
    },
    "3:14100": {
      "confidence": 0.9717673242433469,
      "delay_probability": 0.02823267575665317,
      "on_time_probability": 0.9717673242433469
    },
    "3:14107": {
      "confidence": 0.9718154823335869,
      "delay_probability": 0.028184517666413014,
      "on_time_probability": 0.9718154823335869
    },
    "3:14122": {
      "confidence": 0.971918409795264,
      "delay_probability": 0.028081590204736037,
      "on_time_probability": 0.971918409795264
    },
    "3:14307": {
      "confidence": 0.9731582072947181,
      "delay_probability": 0.02684179270528189,
      "on_time_probability": 0.9731582072947181
    },
    "3:14492": {
      "confidence": 0.974344712806155,
      "delay_probability": 0.02565528719384507,
      "on_time_probability": 0.974344712806155
    },
    "3:14524": {
      "confidence": 0.9745447002253905,
      "delay_probability": 0.025455299774609436,
      "on_time_probability": 0.9745447002253905
    },
    "3:14570": {
      "confidence": 0.9748295245419262,
      "delay_probability": 0.025170475458073778,
      "on_time_probability": 0.9748295245419262
    },
    "3:14635": {
      "confidence": 0.9752267066425053,
      "delay_probability": 0.024773293357494675,
      "on_time_probability": 0.9752267066425053
    },
    "3:14679": {
      "confidence": 0.975492094657982,
      "delay_probability": 0.024507905342017924,
      "on_time_probability": 0.975492094657982
    },
    "3:14683": {
      "confidence": 0.9755160829559266,
      "delay_probability": 0.02448391704407334,
      "on_time_probability": 0.9755160829559266
    },
    "3:14730": {
      "confidence": 0.9757962363235922,
      "delay_probability": 0.024203763676407742,
      "on_time_probability": 0.9757962363235922
    },
    "3:14747": {
      "confidence": 0.9758967965830322,
      "delay_probability": 0.02410320341696782,
      "on_time_probability": 0.9758967965830322
    },
    "3:14771": {
      "confidence": 0.9760380705962011,
      "delay_probability": 0.023961929403798904,
      "on_time_probability": 0.9760380705962011
    },
    "3:14831": {
      "confidence": 0.9763877309772266,
      "delay_probability": 0.023612269022773306,
      "on_time_probability": 0.9763877309772266
    },
    "3:14843": {
      "confidence": 0.9764570631971915,
      "delay_probability": 0.023542936802808525,
      "on_time_probability": 0.9764570631971915
    },
    "3:14869": {
      "confidence": 0.9766066021303426,
      "delay_probability": 0.023393397869657415,
      "on_time_probability": 0.9766066021303426
    },
    "3:14893": {
      "confidence": 0.9767438149647636,
      "delay_probability": 0.023256185035236358,
      "on_time_probability": 0.9767438149647636
    },
    "3:14908": {
      "confidence": 0.9768291736944064,
      "delay_probability": 0.02317082630559361,
      "on_time_probability": 0.9768291736944064
    },
    "3:15016": {
      "confidence": 0.9774347899057838,
      "delay_probability": 0.022565210094216154,
      "on_time_probability": 0.9774347899057838
    },
    "3:15304": {
      "confidence": 0.9789751411573963,
      "delay_probability": 0.021024858842603765,
      "on_time_probability": 0.9789751411573963
    },
    "3:15376": {
      "confidence": 0.9793438637200066,
      "delay_probability": 0.02065613627999339,
      "on_time_probability": 0.9793438637200066
    },
    "4:10140": {
      "confidence": 0.9272238540101877,
      "delay_probability": 0.07277614598981229,
      "on_time_probability": 0.9272238540101877
    },
    "4:10299": {
      "confidence": 0.9298710708572111,
      "delay_probability": 0.07012892914278886,
      "on_time_probability": 0.9298710708572111
    },
    "4:10397": {
      "confidence": 0.9314580588097223,
      "delay_probability": 0.06854194119027768,
      "on_time_probability": 0.9314580588097223
    },
    "4:10423": {
      "confidence": 0.9318734787481755,
      "delay_probability": 0.06812652125182452,
      "on_time_probability": 0.9318734787481755
    },
    "4:10529": {
      "confidence": 0.9335430669387552,
      "delay_probability": 0.06645693306124474,
      "on_time_probability": 0.9335430669387552
    },
    "4:10693": {
      "confidence": 0.9360514497962311,
      "delay_probability": 0.06394855020376894,
      "on_time_probability": 0.9360514497962311
    },
    "4:10721": {
      "confidence": 0.9364707979547534,
      "delay_probability": 0.06352920204524655,
      "on_time_probability": 0.9364707979547534
    },
    "4:10792": {
      "confidence": 0.9375226793826756,
      "delay_probability": 0.06247732061732435,
      "on_time_probability": 0.9375226793826756
    },
    "4:10800": {
      "confidence": 0.9376401771119983,
      "delay_probability": 0.062359822888001674,
      "on_time_probability": 0.9376401771119983
    },
    "4:10821": {
      "confidence": 0.9379476279001131,
      "delay_probability": 0.06205237209988692,
      "on_time_probability": 0.9379476279001131
    },
    "4:11042": {
      "confidence": 0.9410983807740689,
      "delay_probability": 0.058901619225931026,
      "on_time_probability": 0.9410983807740689
    },
    "4:11057": {
      "confidence": 0.941306709537181,
      "delay_probability": 0.058693290462819,
      "on_time_probability": 0.941306709537181
    },
    "4:11066": {
      "confidence": 0.9414313749673235,
      "delay_probability": 0.05856862503267651,
      "on_time_probability": 0.9414313749673235
    },
    "4:11193": {
      "confidence": 0.943164261621955,
      "delay_probability": 0.056835738378044995,
      "on_time_probability": 0.943164261621955
    },
    "4:11259": {
      "confidence": 0.9440456826585445,
      "delay_probability": 0.05595431734145555,
      "on_time_probability": 0.9440456826585445
    },
    "4:11278": {
      "confidence": 0.9442970319024113,
      "delay_probability": 0.05570296809758864,
      "on_time_probability": 0.9442970319024113
    },
    "4:11292": {
      "confidence": 0.94448155634667,
      "delay_probability": 0.05551844365333006,
      "on_time_probability": 0.94448155634667
    },
    "4:11298": {
      "confidence": 0.9445604620036439,
      "delay_probability": 0.05543953799635614,
      "on_time_probability": 0.9445604620036439
    },
    "4:11433": {
      "confidence": 0.9463081602155355,
      "delay_probability": 0.05369183978446443,
      "on_time_probability": 0.9463081602155355
    },
    "4:11618": {
      "confidence": 0.9486188713371031,
      "delay_probability": 0.051381128662896854,
      "on_time_probability": 0.9486188713371031
    },
    "4:11697": {
      "confidence": 0.9495766814568941,
      "delay_probability": 0.05042331854310589,
      "on_time_probability": 0.9495766814568941
    },
    "4:12173": {
      "confidence": 0.9549988841759298,
      "delay_probability": 0.045001115824070126,
      "on_time_probability": 0.9549988841759298
    },
    "4:12191": {
      "confidence": 0.9551926258103247,
      "delay_probability": 0.044807374189675335,
      "on_time_probability": 0.9551926258103247
    },
    "4:12264": {
      "confidence": 0.9559702348752745,
      "delay_probability": 0.044029765124725465,
      "on_time_probability": 0.9559702348752745
    },
    "4:12266": {
      "confidence": 0.9559913570254047,
      "delay_probability": 0.04400864297459533,
      "on_time_probability": 0.9559913570254047
    },
    "4:12339": {
      "confidence": 0.9567557320710848,
      "delay_probability": 0.04324426792891527,
      "on_time_probability": 0.9567557320710848
    },
    "4:12451": {
      "confidence": 0.9579038749590285,
      "delay_probability": 0.042096125040971474,
      "on_time_probability": 0.9579038749590285
    },
    "4:12478": {
      "confidence": 0.9581762689333762,
      "delay_probability": 0.041823731066623855,
      "on_time_probability": 0.9581762689333762
    },
    "4:12889": {
      "confidence": 0.9621199785686776,
      "delay_probability": 0.03788002143132241,
      "on_time_probability": 0.9621199785686776
    },
    "4:12892": {
      "confidence": 0.9621474086053967,
      "delay_probability": 0.037852591394603285,
      "on_time_probability": 0.9621474086053967
    },
    "4:12953": {
      "confidence": 0.9627010309470804,
      "delay_probability": 0.03729896905291961,
      "on_time_probability": 0.9627010309470804
    },
    "4:12954": {
      "confidence": 0.962710041565902,
      "delay_probability": 0.03728995843409795,
      "on_time_probability": 0.962710041565902
    },
    "4:13198": {
      "confidence": 0.9648471554297776,
      "delay_probability": 0.03515284457022243,
      "on_time_probability": 0.9648471554297776
    },
    "4:13204": {
      "confidence": 0.9648981921856741,
      "delay_probability": 0.035101807814325876,
      "on_time_probability": 0.9648981921856741
    },
    "4:13232": {
      "confidence": 0.9651354210539046,
      "delay_probability": 0.03486457894609536,
      "on_time_probability": 0.9651354210539046
    },
    "4:13244": {
      "confidence": 0.9652366168440522,
      "delay_probability": 0.034763383155947805,
      "on_time_probability": 0.9652366168440522
    },
    "4:13303": {
      "confidence": 0.965730057847295,
      "delay_probability": 0.03426994215270498,
      "on_time_probability": 0.965730057847295
    },
    "4:13342": {
      "confidence": 0.966052514881735,
      "delay_probability": 0.03394748511826497,
      "on_time_probability": 0.966052514881735
    },
    "4:13487": {
      "confidence": 0.9672259044885321,
      "delay_probability": 0.0327740955114679,
      "on_time_probability": 0.9672259044885321
    },
    "4:13495": {
      "confidence": 0.9672894899830667,
      "delay_probability": 0.03271051001693321,
      "on_time_probability": 0.9672894899830667
    },
    "4:13796": {
      "confidence": 0.9695970957598039,
      "delay_probability": 0.030402904240196104,
      "on_time_probability": 0.9695970957598039
    },
    "4:13830": {
      "confidence": 0.9698476274718315,
      "delay_probability": 0.030152372528168492,
      "on_time_probability": 0.9698476274718315
    },
    "4:13851": {
      "confidence": 0.970001367156052,
      "delay_probability": 0.029998632843947975,
      "on_time_probability": 0.970001367156052
    },
    "4:13871": {
      "confidence": 0.9701470794993742,
      "delay_probability": 0.029852920500625872,
      "on_time_probability": 0.9701470794993742
    },
    "4:13891": {
      "confidence": 0.9702921057507878,
      "delay_probability": 0.029707894249212184,
      "on_time_probability": 0.9702921057507878
    },
    "4:13930": {
      "confidence": 0.9705729449972951,
      "delay_probability": 0.029427055002704962,
      "on_time_probability": 0.9705729449972951
    },
    "4:13931": {
      "confidence": 0.9705801120480044,
      "delay_probability": 0.029419887951995613,
      "on_time_probability": 0.9705801120480044
    },
    "4:14027": {
      "confidence": 0.9712603227941454,
      "delay_probability": 0.02873967720585458,
      "on_time_probability": 0.9712603227941454
    },
    "4:14057": {
      "confidence": 0.9714697414289377,
      "delay_probability": 0.02853025857106228,
      "on_time_probability": 0.9714697414289377
    },
    "4:14100": {
      "confidence": 0.9717673270786662,
      "delay_probability": 0.02823267292133385,
      "on_time_probability": 0.9717673270786662
    },
    "4:14107": {
      "confidence": 0.9718154851642102,
      "delay_probability": 0.028184514835789796,
      "on_time_probability": 0.9718154851642102
    },
    "4:14122": {
      "confidence": 0.9719184126158487,
      "delay_probability": 0.02808158738415131,
      "on_time_probability": 0.9719184126158487
    },
    "4:14307": {
      "confidence": 0.9731582099942137,
      "delay_probability": 0.02684179000578637,
      "on_time_probability": 0.9731582099942137
    },
    "4:14492": {
      "confidence": 0.9743447153894687,
      "delay_probability": 0.02565528461053131,
      "on_time_probability": 0.9743447153894687
    },
    "4:14524": {
      "confidence": 0.974544702789093,
      "delay_probability": 0.02545529721090695,
      "on_time_probability": 0.974544702789093
    },
    "4:14570": {
      "confidence": 0.9748295270776839,
      "delay_probability": 0.025170472922316167,
      "on_time_probability": 0.9748295270776839
    },
    "4:14635": {
      "confidence": 0.9752267091392663,
      "delay_probability": 0.02477329086073365,
      "on_time_probability": 0.9752267091392663
    },
    "4:14679": {
      "confidence": 0.9754920971286682,
      "delay_probability": 0.024507902871331706,
      "on_time_probability": 0.9754920971286682
    },
    "4:14683": {
      "confidence": 0.9755160854242553,
      "delay_probability": 0.024483914575744732,
      "on_time_probability": 0.9755160854242553
    },
    "4:14730": {
      "confidence": 0.9757962387643782,
      "delay_probability": 0.024203761235621835,
      "on_time_probability": 0.9757962387643782
    },
    "4:14747": {
      "confidence": 0.9758967990139278,
      "delay_probability": 0.02410320098607225,
      "on_time_probability": 0.9758967990139278
    },
    "4:14771": {
      "confidence": 0.9760380730131986,
      "delay_probability": 0.023961926986801486,
      "on_time_probability": 0.9760380730131986
    },
    "4:14831": {
      "confidence": 0.9763877333598078,
      "delay_probability": 0.023612266640192274,
      "on_time_probability": 0.9763877333598078
    },
    "4:14843": {
      "confidence": 0.9764570655729453,
      "delay_probability": 0.023542934427054726,
      "on_time_probability": 0.9764570655729453
    },
    "4:14869": {
      "confidence": 0.9766066044913677,
      "delay_probability": 0.0233933955086323,
      "on_time_probability": 0.9766066044913677
    },
    "4:14893": {
      "confidence": 0.9767438173122701,
      "delay_probability": 0.02325618268772994,
      "on_time_probability": 0.9767438173122701
    },
    "4:14908": {
      "confidence": 0.976829176033501,
      "delay_probability": 0.023170823966499002,
      "on_time_probability": 0.976829176033501
    },
    "4:15016": {
      "confidence": 0.9774347921851538,
      "delay_probability": 0.022565207814846205,
      "on_time_probability": 0.9774347921851538
    },
    "4:15304": {
      "confidence": 0.9789751432845182,
      "delay_probability": 0.02102485671548178,
      "on_time_probability": 0.9789751432845182
    },
    "4:15376": {
      "confidence": 0.9793438658106114,
      "delay_probability": 0.020656134189388605,
      "on_time_probability": 0.9793438658106114
    },
    "5:10140": {
      "confidence": 0.9272238609838561,
      "delay_probability": 0.07277613901614387,
      "on_time_probability": 0.9272238609838561
    },
    "5:10299": {
      "confidence": 0.9298710775963994,
      "delay_probability": 0.0701289224036006,
      "on_time_probability": 0.9298710775963994
    },
    "5:10397": {
      "confidence": 0.931458065407647,
      "delay_probability": 0.06854193459235307,
      "on_time_probability": 0.931458065407647
    },
    "5:10423": {
      "confidence": 0.931873485309036,
      "delay_probability": 0.06812651469096392,
      "on_time_probability": 0.931873485309036
    },
    "5:10529": {
      "confidence": 0.9335430733502944,
      "delay_probability": 0.06645692664970562,
      "on_time_probability": 0.9335430733502944
    },
    "5:10693": {
      "confidence": 0.9360514559823472,
      "delay_probability": 0.06394854401765282,
      "on_time_probability": 0.9360514559823472
    },
    "5:10721": {
      "confidence": 0.9364708041030567,
      "delay_probability": 0.06352919589694324,
      "on_time_probability": 0.9364708041030567
    },
    "5:10792": {
      "confidence": 0.9375226854359704,
      "delay_probability": 0.062477314564029565,
      "on_time_probability": 0.9375226854359704
    },
    "5:10800": {
      "confidence": 0.9376401831546662,
      "delay_probability": 0.062359816845333794,
      "on_time_probability": 0.9376401831546662
    },
    "5:10821": {
      "confidence": 0.9379476339149606,
      "delay_probability": 0.06205236608503942,
      "on_time_probability": 0.9379476339149606
    },
    "5:11042": {
      "confidence": 0.9410983865026875,
      "delay_probability": 0.0589016134973125,
      "on_time_probability": 0.9410983865026875
    },
    "5:11057": {
      "confidence": 0.9413067152468017,
      "delay_probability": 0.05869328475319834,
      "on_time_probability": 0.9413067152468017
    },
    "5:11066": {
      "confidence": 0.9414313806655714,
      "delay_probability": 0.058568619334428605,
      "on_time_probability": 0.9414313806655714
    },
    "5:11193": {
      "confidence": 0.9431642671617856,
      "delay_probability": 0.05683573283821438,
      "on_time_probability": 0.9431642671617856
    },
    "5:11259": {
      "confidence": 0.9440456881175591,
      "delay_probability": 0.05595431188244095,
      "on_time_probability": 0.9440456881175591
    },
    "5:11278": {
      "confidence": 0.9442970373383507,
      "delay_probability": 0.055702962661649265,
      "on_time_probability": 0.9442970373383507
    },
    "5:11292": {
      "confidence": 0.9444815617656607,
      "delay_probability": 0.05551843823433933,
      "on_time_probability": 0.9444815617656607
    },
    "5:11298": {
      "confidence": 0.9445604674153849,
      "delay_probability": 0.05543953258461508,
      "on_time_probability": 0.9445604674153849
    },
    "5:11433": {
      "confidence": 0.9463081654663723,
      "delay_probability": 0.0536918345336277,
      "on_time_probability": 0.9463081654663723
    },
    "5:11618": {
      "confidence": 0.9486188763742318,
      "delay_probability": 0.05138112362576821,
      "on_time_probability": 0.9486188763742318
    },
    "5:11697": {
      "confidence": 0.9495766864051154,
      "delay_probability": 0.05042331359488465,
      "on_time_probability": 0.9495766864051154
    },
    "5:12173": {
      "confidence": 0.9549988886172674,
      "delay_probability": 0.0450011113827325,
      "on_time_probability": 0.9549988886172674
    },
    "5:12191": {
      "confidence": 0.9551926302334384,
      "delay_probability": 0.04480736976656169,
      "on_time_probability": 0.9551926302334384
    },
    "5:12264": {
      "confidence": 0.9559702392251657,
      "delay_probability": 0.04402976077483439,
      "on_time_probability": 0.9559702392251657
    },
    "5:12266": {
      "confidence": 0.9559913613733051,
      "delay_probability": 0.044008638626694935,
      "on_time_probability": 0.9559913613733051
    },
    "5:12339": {
      "confidence": 0.9567557363468836,
      "delay_probability": 0.043244263653116434,
      "on_time_probability": 0.9567557363468836
    },
    "5:12451": {
      "confidence": 0.957903879126299,
      "delay_probability": 0.04209612087370095,
      "on_time_probability": 0.957903879126299
    },
    "5:12478": {
      "confidence": 0.9581762730748586,
      "delay_probability": 0.04182372692514139,
      "on_time_probability": 0.9581762730748586
    },
    "5:12889": {
      "confidence": 0.9621199823350832,
      "delay_probability": 0.037880017664916756,
      "on_time_probability": 0.9621199823350832
    },
    "5:12892": {
      "confidence": 0.9621474123691823,
      "delay_probability": 0.03785258763081771,
      "on_time_probability": 0.9621474123691823
    },
    "5:12953": {
      "confidence": 0.9627010346579519,
      "delay_probability": 0.03729896534204817,
      "on_time_probability": 0.9627010346579519
    },
    "5:12954": {
      "confidence": 0.9627100452759118,
      "delay_probability": 0.03728995472408826,
      "on_time_probability": 0.9627100452759118
    },
    "5:13198": {
      "confidence": 0.9648471589349278,
      "delay_probability": 0.03515284106507219,
      "on_time_probability": 0.9648471589349278
    },
    "5:13204": {
      "confidence": 0.9648981956859205,
      "delay_probability": 0.035101804314079464,
      "on_time_probability": 0.9648981956859205
    },
    "5:13232": {
      "confidence": 0.96513542453135,
      "delay_probability": 0.03486457546864995,
      "on_time_probability": 0.96513542453135
    },
    "5:13244": {
      "confidence": 0.9652366203117677,
      "delay_probability": 0.034763379688232246,
      "on_time_probability": 0.9652366203117677
    },
    "5:13303": {
      "confidence": 0.9657300612675365,
      "delay_probability": 0.034269938732463555,
      "on_time_probability": 0.9657300612675365
    },
    "5:13342": {
      "confidence": 0.9660525182709255,
      "delay_probability": 0.03394748172907444,
      "on_time_probability": 0.9660525182709255
    },
    "5:13487": {
      "confidence": 0.9672259077645501,
      "delay_probability": 0.032774092235449914,
      "on_time_probability": 0.9672259077645501
    },
    "5:13495": {
      "confidence": 0.9672894932529439,
      "delay_probability": 0.03271050674705613,
      "on_time_probability": 0.9672894932529439
    },
    "5:13796": {
      "confidence": 0.9695970988062537,
      "delay_probability": 0.03040290119374635,
      "on_time_probability": 0.9695970988062537
    },
    "5:13830": {
      "confidence": 0.9698476304939581,
      "delay_probability": 0.03015236950604198,
      "on_time_probability": 0.9698476304939581
    },
    "5:13851": {
      "confidence": 0.9700013701632461,
      "delay_probability": 0.029998629836753936,
      "on_time_probability": 0.9700013701632461
    },
    "5:13871": {
      "confidence": 0.9701470824924109,
      "delay_probability": 0.029852917507589134,
      "on_time_probability": 0.9701470824924109
    },
    "5:13891": {
      "confidence": 0.9702921087297296,
      "delay_probability": 0.02970789127027045,
      "on_time_probability": 0.9702921087297296
    },
    "5:13930": {
      "confidence": 0.9705729479489299,
      "delay_probability": 0.029427052051070147,
      "on_time_probability": 0.9705729479489299
    },
    "5:13931": {
      "confidence": 0.9705801149989421,
      "delay_probability": 0.029419885001057883,
      "on_time_probability": 0.9705801149989421
    },
    "5:14027": {
      "confidence": 0.9712603256788754,
      "delay_probability": 0.028739674321124547,
      "on_time_probability": 0.9712603256788754
    },
    "5:14057": {
      "confidence": 0.9714697442932649,
      "delay_probability": 0.028530255706735074,
      "on_time_probability": 0.9714697442932649
    },
    "5:14100": {
      "confidence": 0.9717673299139852,
      "delay_probability": 0.02823267008601483,
      "on_time_probability": 0.9717673299139852
    },
    "5:14107": {
      "confidence": 0.9718154879948331,
      "delay_probability": 0.028184512005166862,
      "on_time_probability": 0.9718154879948331
    },
    "5:14122": {
      "confidence": 0.9719184154364331,
      "delay_probability": 0.02808158456356687,
      "on_time_probability": 0.9719184154364331
    },
    "5:14307": {
      "confidence": 0.9731582126937088,
      "delay_probability": 0.02684178730629112,
      "on_time_probability": 0.9731582126937088
    },
    "5:14492": {
      "confidence": 0.9743447179727822,
      "delay_probability": 0.025655282027217813,
      "on_time_probability": 0.9743447179727822
    },
    "5:14524": {
      "confidence": 0.9745447053527952,
      "delay_probability": 0.02545529464720473,
      "on_time_probability": 0.9745447053527952
    },
    "5:14570": {
      "confidence": 0.9748295296134412,
      "delay_probability": 0.025170470386558813,
      "on_time_probability": 0.9748295296134412
    },
    "5:14635": {
      "confidence": 0.9752267116360271,
      "delay_probability": 0.024773288363972887,
      "on_time_probability": 0.9752267116360271
    },
    "5:14679": {
      "confidence": 0.9754920995993542,
      "delay_probability": 0.024507900400645738,
      "on_time_probability": 0.9754920995993542
    },
    "5:14683": {
      "confidence": 0.9755160878925836,
      "delay_probability": 0.024483912107416374,
      "on_time_probability": 0.9755160878925836
    },
    "5:14730": {
      "confidence": 0.9757962412051638,
      "delay_probability": 0.024203758794836185,
      "on_time_probability": 0.9757962412051638
    },
    "5:14747": {
      "confidence": 0.975896801444823,
      "delay_probability": 0.024103198555176925,
      "on_time_probability": 0.975896801444823
    },
    "5:14771": {
      "confidence": 0.9760380754301957,
      "delay_probability": 0.023961924569804317,
      "on_time_probability": 0.9760380754301957
    },
    "5:14831": {
      "confidence": 0.9763877357423885,
      "delay_probability": 0.02361226425761149,
      "on_time_probability": 0.9763877357423885
    },
    "5:14843": {
      "confidence": 0.9764570679486988,
      "delay_probability": 0.023542932051301174,
      "on_time_probability": 0.9764570679486988
    },
    "5:14869": {
      "confidence": 0.9766066068523925,
      "delay_probability": 0.023393393147607425,
      "on_time_probability": 0.9766066068523925
    },
    "5:14893": {
      "confidence": 0.9767438196597762,
      "delay_probability": 0.023256180340223764,
      "on_time_probability": 0.9767438196597762
    },
    "5:14908": {
      "confidence": 0.9768291783725953,
      "delay_probability": 0.023170821627404636,
      "on_time_probability": 0.9768291783725953
    },
    "5:15016": {
      "confidence": 0.9774347944645235,
      "delay_probability": 0.02256520553547649,
      "on_time_probability": 0.9774347944645235
    },
    "5:15304": {
      "confidence": 0.97897514541164,
      "delay_probability": 0.02102485458836001,
      "on_time_probability": 0.97897514541164
    },
    "5:15376": {
      "confidence": 0.979343867901216,
      "delay_probability": 0.020656132098784037,
      "on_time_probability": 0.979343867901216
    },
    "6:10140": {
      "confidence": 0.927223867957524,
      "delay_probability": 0.07277613204247606,
      "on_time_probability": 0.927223867957524
    },
    "6:10299": {
      "confidence": 0.9298710843355871,
      "delay_probability": 0.07012891566441291,
      "on_time_probability": 0.9298710843355871
    },
    "6:10397": {
      "confidence": 0.931458072005571,
      "delay_probability": 0.06854192799442903,
      "on_time_probability": 0.931458072005571
    },
    "6:10423": {
      "confidence": 0.9318734918698961,
      "delay_probability": 0.0681265081301039,
      "on_time_probability": 0.9318734918698961
    },
    "6:10529": {
      "confidence": 0.9335430797618329,
      "delay_probability": 0.06645692023816703,
      "on_time_probability": 0.9335430797618329
    },
    "6:10693": {
      "confidence": 0.9360514621684628,
      "delay_probability": 0.06394853783153724,
      "on_time_probability": 0.9360514621684628
    },
    "6:10721": {
      "confidence": 0.9364708102513595,
      "delay_probability": 0.06352918974864047,
      "on_time_probability": 0.9364708102513595
    },
    "6:10792": {
      "confidence": 0.9375226914892647,
      "delay_probability": 0.062477308510735324,
      "on_time_probability": 0.9375226914892647
    },
    "6:10800": {
      "confidence": 0.9376401891973336,
      "delay_probability": 0.06235981080266642,
      "on_time_probability": 0.9376401891973336
    },
    "6:10821": {
      "confidence": 0.9379476399298076,
      "delay_probability": 0.062052360070192415,
      "on_time_probability": 0.9379476399298076
    },
    "6:11042": {
      "confidence": 0.9410983922313055,
      "delay_probability": 0.05890160776869446,
      "on_time_probability": 0.9410983922313055
    },
    "6:11057": {
      "confidence": 0.9413067209564219,
      "delay_probability": 0.05869327904357816,
      "on_time_probability": 0.9413067209564219
    },
    "6:11066": {
      "confidence": 0.9414313863638188,
      "delay_probability": 0.05856861363618119,
      "on_time_probability": 0.9414313863638188
    },
    "6:11193": {
      "confidence": 0.9431642727016157,
      "delay_probability": 0.05683572729838424,
      "on_time_probability": 0.9431642727016157
    },
    "6:11259": {
      "confidence": 0.9440456935765732,
      "delay_probability": 0.055954306423426824,
      "on_time_probability": 0.9440456935765732
    },
    "6:11278": {
      "confidence": 0.9442970427742896,
      "delay_probability": 0.05570295722571035,
      "on_time_probability": 0.9442970427742896
    },
    "6:11292": {
      "confidence": 0.9444815671846509,
      "delay_probability": 0.05551843281534908,
      "on_time_probability": 0.9444815671846509
    },
    "6:11298": {
      "confidence": 0.9445604728271255,
      "delay_probability": 0.05543952717287449,
      "on_time_probability": 0.9445604728271255
    },
    "6:11433": {
      "confidence": 0.9463081707172085,
      "delay_probability": 0.05369182928279143,
      "on_time_probability": 0.9463081707172085
    },
    "6:11618": {
      "confidence": 0.94861888141136,
      "delay_probability": 0.05138111858864,
      "on_time_probability": 0.94861888141136
    },
    "6:11697": {
      "confidence": 0.9495766913533361,
      "delay_probability": 0.05042330864666385,
      "on_time_probability": 0.9495766913533361
    },
    "6:12173": {
      "confidence": 0.9549988930586047,
      "delay_probability": 0.045001106941395266,
      "on_time_probability": 0.9549988930586047
    },
    "6:12191": {
      "confidence": 0.9551926346565516,
      "delay_probability": 0.044807365343448445,
      "on_time_probability": 0.9551926346565516
    },
    "6:12264": {
      "confidence": 0.9559702435750563,
      "delay_probability": 0.0440297564249437,
      "on_time_probability": 0.9559702435750563
    },
    "6:12266": {
      "confidence": 0.955991365721205,
      "delay_probability": 0.04400863427879493,
      "on_time_probability": 0.955991365721205
    },
    "6:12339": {
      "confidence": 0.956755740622682,
      "delay_probability": 0.043244259377317976,
      "on_time_probability": 0.956755740622682
    },
    "6:12451": {
      "confidence": 0.9579038832935692,
      "delay_probability": 0.042096116706430806,
      "on_time_probability": 0.9579038832935692
    },
    "6:12478": {
      "confidence": 0.9581762772163407,
      "delay_probability": 0.041823722783659305,
      "on_time_probability": 0.9581762772163407
    },
    "6:12889": {
      "confidence": 0.9621199861014885,
      "delay_probability": 0.037880013898511464,
      "on_time_probability": 0.9621199861014885
    },
    "6:12892": {
      "confidence": 0.9621474161329675,
      "delay_probability": 0.03785258386703247,
      "on_time_probability": 0.9621474161329675
    },
    "6:12953": {
      "confidence": 0.9627010383688229,
      "delay_probability": 0.03729896163117708,
      "on_time_probability": 0.9627010383688229
    },
    "6:12954": {
      "confidence": 0.962710048985921,
      "delay_probability": 0.03728995101407891,
      "on_time_probability": 0.962710048985921
    },
    "6:13198": {
      "confidence": 0.9648471624400777,
      "delay_probability": 0.035152837559922274,
      "on_time_probability": 0.9648471624400777
    },
    "6:13204": {
      "confidence": 0.9648981991861666,
      "delay_probability": 0.03510180081383337,
      "on_time_probability": 0.9648981991861666
    },
    "6:13232": {
      "confidence": 0.9651354280087951,
      "delay_probability": 0.034864571991204844,
      "on_time_probability": 0.9651354280087951
    },
    "6:13244": {
      "confidence": 0.9652366237794829,
      "delay_probability": 0.034763376220517006,
      "on_time_probability": 0.9652366237794829
    },
    "6:13303": {
      "confidence": 0.9657300646877776,
      "delay_probability": 0.034269935312222444,
      "on_time_probability": 0.9657300646877776
    },
    "6:13342": {
      "confidence": 0.9660525216601158,
      "delay_probability": 0.033947478339884214,
      "on_time_probability": 0.9660525216601158
    },
    "6:13487": {
      "confidence": 0.9672259110405678,
      "delay_probability": 0.032774088959432235,
      "on_time_probability": 0.9672259110405678
    },
    "6:13495": {
      "confidence": 0.9672894965228207,
      "delay_probability": 0.03271050347717935,
      "on_time_probability": 0.9672894965228207
    },
    "6:13796": {
      "confidence": 0.9695971018527031,
      "delay_probability": 0.030402898147296874,
      "on_time_probability": 0.9695971018527031
    },
    "6:13830": {
      "confidence": 0.9698476335160843,
      "delay_probability": 0.030152366483915758,
      "on_time_probability": 0.9698476335160843
    },
    "6:13851": {
      "confidence": 0.9700013731704398,
      "delay_probability": 0.02999862682956018,
      "on_time_probability": 0.9700013731704398
    },
    "6:13871": {
      "confidence": 0.9701470854854474,
      "delay_probability": 0.029852914514552676,
      "on_time_probability": 0.9701470854854474
    },
    "6:13891": {
      "confidence": 0.970292111708671,
      "delay_probability": 0.029707888291328984,
      "on_time_probability": 0.970292111708671
    },
    "6:13930": {
      "confidence": 0.9705729509005644,
      "delay_probability": 0.029427049099435606,
      "on_time_probability": 0.9705729509005644
    },
    "6:13931": {
      "confidence": 0.9705801179498795,
      "delay_probability": 0.02941988205012043,
      "on_time_probability": 0.9705801179498795
    },
    "6:14027": {
      "confidence": 0.9712603285636052,
      "delay_probability": 0.02873967143639478,
      "on_time_probability": 0.9712603285636052
    },
    "6:14057": {
      "confidence": 0.9714697471575918,
      "delay_probability": 0.028530252842408132,
      "on_time_probability": 0.9714697471575918
    },
    "6:14100": {
      "confidence": 0.9717673327493039,
      "delay_probability": 0.028232667250696064,
      "on_time_probability": 0.9717673327493039
    },
    "6:14107": {
      "confidence": 0.9718154908254558,
      "delay_probability": 0.028184509174544195,
      "on_time_probability": 0.9718154908254558
    },
    "6:14122": {
      "confidence": 0.9719184182570173,
      "delay_probability": 0.028081581742982694,
      "on_time_probability": 0.9719184182570173
    },
    "6:14307": {
      "confidence": 0.9731582153932039,
      "delay_probability": 0.02684178460679612,
      "on_time_probability": 0.9731582153932039
    },
    "6:14492": {
      "confidence": 0.9743447205560954,
      "delay_probability": 0.025655279443904555,
      "on_time_probability": 0.9743447205560954
    },
    "6:14524": {
      "confidence": 0.9745447079164973,
      "delay_probability": 0.02545529208350275,
      "on_time_probability": 0.9745447079164973
    },
    "6:14570": {
      "confidence": 0.9748295321491983,
      "delay_probability": 0.025170467850801705,
      "on_time_probability": 0.9748295321491983
    },
    "6:14635": {
      "confidence": 0.9752267141327876,
      "delay_probability": 0.02477328586721236,
      "on_time_probability": 0.9752267141327876
    },
    "6:14679": {
      "confidence": 0.97549210207004,
      "delay_probability": 0.02450789792996001,
      "on_time_probability": 0.97549210207004
    },
    "6:14683": {
      "confidence": 0.9755160903609118,
      "delay_probability": 0.024483909639088246,
      "on_time_probability": 0.9755160903609118
    },
    "6:14730": {
      "confidence": 0.9757962436459492,
      "delay_probability": 0.024203756354050757,
      "on_time_probability": 0.9757962436459492
    },
    "6:14747": {
      "confidence": 0.9758968038757182,
      "delay_probability": 0.02410319612428183,
      "on_time_probability": 0.9758968038757182
    },
    "6:14771": {
      "confidence": 0.9760380778471927,
      "delay_probability": 0.023961922152807378,
      "on_time_probability": 0.9760380778471927
    },
    "6:14831": {
      "confidence": 0.976387738124969,
      "delay_probability": 0.02361226187503092,
      "on_time_probability": 0.976387738124969
    },
    "6:14843": {
      "confidence": 0.9764570703244522,
      "delay_probability": 0.02354292967554784,
      "on_time_probability": 0.9764570703244522
    },
    "6:14869": {
      "confidence": 0.9766066092134172,
      "delay_probability": 0.023393390786582775,
      "on_time_probability": 0.9766066092134172
    },
    "6:14893": {
      "confidence": 0.9767438220072822,
      "delay_probability": 0.02325617799271781,
      "on_time_probability": 0.9767438220072822
    },
    "6:14908": {
      "confidence": 0.9768291807116896,
      "delay_probability": 0.023170819288310496,
      "on_time_probability": 0.9768291807116896
    },
    "6:15016": {
      "confidence": 0.977434796743893,
      "delay_probability": 0.022565203256106992,
      "on_time_probability": 0.977434796743893
    },
    "6:15304": {
      "confidence": 0.9789751475387616,
      "delay_probability": 0.021024852461238447,
      "on_time_probability": 0.9789751475387616
    },
    "6:15376": {
      "confidence": 0.9793438699918203,
      "delay_probability": 0.02065613000817966,
      "on_time_probability": 0.9793438699918203
    },
    "7:10140": {
      "confidence": 0.9272238749311912,
      "delay_probability": 0.07277612506880887,
      "on_time_probability": 0.9272238749311912
    },
    "7:10299": {
      "confidence": 0.9298710910747742,
      "delay_probability": 0.07012890892522584,
      "on_time_probability": 0.9298710910747742
    },
    "7:10397": {
      "confidence": 0.9314580786034944,
      "delay_probability": 0.0685419213965056,
      "on_time_probability": 0.9314580786034944
    },
    "7:10423": {
      "confidence": 0.9318734984307555,
      "delay_probability": 0.06812650156924449,
      "on_time_probability": 0.9318734984307555
    },
    "7:10529": {
      "confidence": 0.9335430861733709,
      "delay_probability": 0.06645691382662906,
      "on_time_probability": 0.9335430861733709
    },
    "7:10693": {
      "confidence": 0.9360514683545778,
      "delay_probability": 0.06394853164542226,
      "on_time_probability": 0.9360514683545778
    },
    "7:10721": {
      "confidence": 0.9364708163996618,
      "delay_probability": 0.06352918360033827,
      "on_time_probability": 0.9364708163996618
    },
    "7:10792": {
      "confidence": 0.9375226975425583,
      "delay_probability": 0.062477302457441646,
      "on_time_probability": 0.9375226975425583
    },
    "7:10800": {
      "confidence": 0.9376401952400004,
      "delay_probability": 0.06235980475999964,
      "on_time_probability": 0.9376401952400004
    },
    "7:10821": {
      "confidence": 0.937947645944654,
      "delay_probability": 0.062052354055346017,
      "on_time_probability": 0.937947645944654
    },
    "7:11042": {
      "confidence": 0.941098397959923,
      "delay_probability": 0.05890160204007698,
      "on_time_probability": 0.941098397959923
    },
    "7:11057": {
      "confidence": 0.9413067266660414,
      "delay_probability": 0.05869327333395854,
      "on_time_probability": 0.9413067266660414
    },
    "7:11066": {
      "confidence": 0.9414313920620657,
      "delay_probability": 0.05856860793793431,
      "on_time_probability": 0.9414313920620657
    },
    "7:11193": {
      "confidence": 0.9431642782414453,
      "delay_probability": 0.05683572175855464,
      "on_time_probability": 0.9431642782414453
    },
    "7:11259": {
      "confidence": 0.9440456990355868,
      "delay_probability": 0.05595430096441323,
      "on_time_probability": 0.9440456990355868
    },
    "7:11278": {
      "confidence": 0.9442970482102281,
      "delay_probability": 0.055702951789771964,
      "on_time_probability": 0.9442970482102281
    },
    "7:11292": {
      "confidence": 0.9444815726036406,
      "delay_probability": 0.05551842739635933,
      "on_time_probability": 0.9444815726036406
    },
    "7:11298": {
      "confidence": 0.9445604782388656,
      "delay_probability": 0.05543952176113442,
      "on_time_probability": 0.9445604782388656
    },
    "7:11433": {
      "confidence": 0.9463081759680443,
      "delay_probability": 0.05369182403195567,
      "on_time_probability": 0.9463081759680443
    },
    "7:11618": {
      "confidence": 0.9486188864484877,
      "delay_probability": 0.05138111355151228,
      "on_time_probability": 0.9486188864484877
    },
    "7:11697": {
      "confidence": 0.9495766963015565,
      "delay_probability": 0.05042330369844352,
      "on_time_probability": 0.9495766963015565
    },
    "7:12173": {
      "confidence": 0.9549988974999415,
      "delay_probability": 0.04500110250005847,
      "on_time_probability": 0.9549988974999415
    },
    "7:12191": {
      "confidence": 0.9551926390796643,
      "delay_probability": 0.04480736092033563,
      "on_time_probability": 0.9551926390796643
    },
    "7:12264": {
      "confidence": 0.9559702479249466,
      "delay_probability": 0.04402975207505344,
      "on_time_probability": 0.9559702479249466
    },
    "7:12266": {
      "confidence": 0.9559913700691046,
      "delay_probability": 0.04400862993089536,
      "on_time_probability": 0.9559913700691046
    },
    "7:12339": {
      "confidence": 0.95675574489848,
      "delay_probability": 0.04324425510151994,
      "on_time_probability": 0.95675574489848
    },
    "7:12451": {
      "confidence": 0.9579038874608389,
      "delay_probability": 0.042096112539161075,
      "on_time_probability": 0.9579038874608389
    },
    "7:12478": {
      "confidence": 0.9581762813578224,
      "delay_probability": 0.041823718642177626,
      "on_time_probability": 0.9581762813578224
    },
    "7:12889": {
      "confidence": 0.9621199898678935,
      "delay_probability": 0.03788001013210653,
      "on_time_probability": 0.9621199898678935
    },
    "7:12892": {
      "confidence": 0.9621474198967523,
      "delay_probability": 0.037852580103247616,
      "on_time_probability": 0.9621474198967523
    },
    "7:12953": {
      "confidence": 0.9627010420796936,
      "delay_probability": 0.037298957920306366,
      "on_time_probability": 0.9627010420796936
    },
    "7:12954": {
      "confidence": 0.96271005269593,
      "delay_probability": 0.037289947304069926,
      "on_time_probability": 0.96271005269593
    },
    "7:13198": {
      "confidence": 0.9648471659452273,
      "delay_probability": 0.03515283405477271,
      "on_time_probability": 0.9648471659452273
    },
    "7:13204": {
      "confidence": 0.9648982026864124,
      "delay_probability": 0.035101797313587625,
      "on_time_probability": 0.9648982026864124
    },
    "7:13232": {
      "confidence": 0.9651354314862399,
      "delay_probability": 0.034864568513760096,
      "on_time_probability": 0.9651354314862399
    },
    "7:13244": {
      "confidence": 0.9652366272471978,
      "delay_probability": 0.03476337275280212,
      "on_time_probability": 0.9652366272471978
    },
    "7:13303": {
      "confidence": 0.9657300681080183,
      "delay_probability": 0.03426993189198168,
      "on_time_probability": 0.9657300681080183
    },
    "7:13342": {
      "confidence": 0.9660525250493056,
      "delay_probability": 0.03394747495069434,
      "on_time_probability": 0.9660525250493056
    },
    "7:13487": {
      "confidence": 0.9672259143165851,
      "delay_probability": 0.03277408568341488,
      "on_time_probability": 0.9672259143165851
    },
    "7:13495": {
      "confidence": 0.9672894997926971,
      "delay_probability": 0.0327105002073029,
      "on_time_probability": 0.9672894997926971
    },
    "7:13796": {
      "confidence": 0.9695971048991523,
      "delay_probability": 0.030402895100847704,
      "on_time_probability": 0.9695971048991523
    },
    "7:13830": {
      "confidence": 0.9698476365382102,
      "delay_probability": 0.030152363461789837,
      "on_time_probability": 0.9698476365382102
    },
    "7:13851": {
      "confidence": 0.9700013761776333,
      "delay_probability": 0.029998623822366725,
      "on_time_probability": 0.9700013761776333
    },
    "7:13871": {
      "confidence": 0.9701470884784835,
      "delay_probability": 0.029852911521516517,
      "on_time_probability": 0.9701470884784835
    },
    "7:13891": {
      "confidence": 0.9702921146876122,
      "delay_probability": 0.02970788531238782,
      "on_time_probability": 0.9702921146876122
    },
    "7:13930": {
      "confidence": 0.9705729538521987,
      "delay_probability": 0.029427046147801363,
      "on_time_probability": 0.9705729538521987
    },
    "7:13931": {
      "confidence": 0.9705801209008167,
      "delay_probability": 0.029419879099183283,
      "on_time_probability": 0.9705801209008167
    },
    "7:14027": {
      "confidence": 0.9712603314483347,
      "delay_probability": 0.028739668551665314,
      "on_time_probability": 0.9712603314483347
    },
    "7:14057": {
      "confidence": 0.9714697500219185,
      "delay_probability": 0.028530249978081484,
      "on_time_probability": 0.9714697500219185
    },
    "7:14100": {
      "confidence": 0.9717673355846224,
      "delay_probability": 0.02823266441537759,
      "on_time_probability": 0.9717673355846224
    },
    "7:14107": {
      "confidence": 0.9718154936560782,
      "delay_probability": 0.028184506343921813,
      "on_time_probability": 0.9718154936560782
    },
    "7:14122": {
      "confidence": 0.9719184210776012,
      "delay_probability": 0.028081578922398803,
      "on_time_probability": 0.9719184210776012
    },
    "7:14307": {
      "confidence": 0.9731582180926986,
      "delay_probability": 0.0268417819073014,
      "on_time_probability": 0.9731582180926986
    },
    "7:14492": {
      "confidence": 0.9743447231394085,
      "delay_probability": 0.025655276860591564,
      "on_time_probability": 0.9743447231394085
    },
    "7:14524": {
      "confidence": 0.974544710480199,
      "delay_probability": 0.02545528951980103,
      "on_time_probability": 0.974544710480199
    },
    "7:14570": {
      "confidence": 0.9748295346849551,
      "delay_probability": 0.02517046531504485,
      "on_time_probability": 0.9748295346849551
    },
    "7:14635": {
      "confidence": 0.975226716629548,
      "delay_probability": 0.024773283370452082,
      "on_time_probability": 0.975226716629548
    },
    "7:14679": {
      "confidence": 0.9754921045407254,
      "delay_probability": 0.02450789545927453,
      "on_time_probability": 0.9754921045407254
    },
    "7:14683": {
      "confidence": 0.9755160928292397,
      "delay_probability": 0.024483907170760374,
      "on_time_probability": 0.9755160928292397
    },
    "7:14730": {
      "confidence": 0.9757962460867344,
      "delay_probability": 0.024203753913265583,
      "on_time_probability": 0.9757962460867344
    },
    "7:14747": {
      "confidence": 0.975896806306613,
      "delay_probability": 0.02410319369338699,
      "on_time_probability": 0.975896806306613
    },
    "7:14771": {
      "confidence": 0.9760380802641894,
      "delay_probability": 0.023961919735810685,
      "on_time_probability": 0.9760380802641894
    },
    "7:14831": {
      "confidence": 0.9763877405075494,
      "delay_probability": 0.023612259492450605,
      "on_time_probability": 0.9763877405075494
    },
    "7:14843": {
      "confidence": 0.9764570727002052,
      "delay_probability": 0.02354292729979476,
      "on_time_probability": 0.9764570727002052
    },
    "7:14869": {
      "confidence": 0.9766066115744416,
      "delay_probability": 0.02339338842555836,
      "on_time_probability": 0.9766066115744416
    },
    "7:14893": {
      "confidence": 0.9767438243547879,
      "delay_probability": 0.023256175645212096,
      "on_time_probability": 0.9767438243547879
    },
    "7:14908": {
      "confidence": 0.9768291830507834,
      "delay_probability": 0.023170816949216595,
      "on_time_probability": 0.9768291830507834
    },
    "7:15016": {
      "confidence": 0.9774347990232622,
      "delay_probability": 0.02256520097673773,
      "on_time_probability": 0.9774347990232622
    },
    "7:15304": {
      "confidence": 0.978975149665883,
      "delay_probability": 0.0210248503341171,
      "on_time_probability": 0.978975149665883
    },
    "7:15376": {
      "confidence": 0.9793438720824245,
      "delay_probability": 0.020656127917575505,
      "on_time_probability": 0.9793438720824245
    }
  }
};
