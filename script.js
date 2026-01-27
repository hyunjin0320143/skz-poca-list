// 1. 기초 설정 (맨 위에 한 번만!)
const memberMap = { 
    "BANG": "방찬", "KNOW": "리노", "BIN": "창빈", "HYUN": "현진", 
    "HAN": "한", "LIX": "필릭스", "MIN": "승민", "IN": "아이엔", "SKZ": "단체" 
};
const memberOrder = ["방찬", "리노", "창빈", "현진", "한", "필릭스", "승민", "아이엔", "단체", "기타"];
let isGroupedView = false; 

// 2. 이미지 경로 리스트 (이 부분의 따옴표 안에 경로를 채우세요)
const rawPaths = [
  // === ALBUM / DO IT ===
  "./images/album/DO IT/BANG_DOIT_ACCORDIONver PHOTOCARD_25110701.jpg",
  "./images/album/DO IT/BANG_DOIT_ACCORDIONver POB_25110801.jpg",
  "./images/album/DO IT/BANG_DOIT_DOver PHOTOCARD_25110201.jpg",
  "./images/album/DO IT/BANG_DOIT_ITver LENTICULAR BLACK_25110501.jpg",
  "./images/album/DO IT/BANG_DOIT_ITver LENTICULAR PINK_25110601.jpg",
  "./images/album/DO IT/BANG_DOIT_ITver PHOTOCARD_25110401.jpg",
  "./images/album/DO IT/BANG_DOIT_PLATFORMver PHOTOCARD_25111001.jpg",
  "./images/album/DO IT/BANG_DOIT_PLATFORMver POB_25111101.jpg",
  "./images/album/DO IT/BANG_DOIT_PLATFORMver SET_25110901.jpg",
  "./images/album/DO IT/BIN_DOIT_ACCORDIONver PHOTOCARD_25110703.jpg",
  "./images/album/DO IT/BIN_DOIT_ACCORDIONver POB_25110803.jpg",
  "./images/album/DO IT/BIN_DOIT_DOver PHOTOCARD_25110203.jpg",
  "./images/album/DO IT/BIN_DOIT_ITver LENTICULAR BLACK_25110503.jpg",
  "./images/album/DO IT/BIN_DOIT_ITver LENTICULAR PINK_25110603.jpg",
  "./images/album/DO IT/BIN_DOIT_ITver PHOTOCARD_25110403.jpg",
  "./images/album/DO IT/BIN_DOIT_PLATFORMver PHOTOCARD_25111003.jpg",
  "./images/album/DO IT/BIN_DOIT_PLATFORMver POB_25111103.jpg",
  "./images/album/DO IT/BIN_DOIT_PLATFORMver SET_25110903.jpg",
  "./images/album/DO IT/HAN_DOIT_ACCORDIONver PHOTOCARD_25110705.jpg",
  "./images/album/DO IT/HAN_DOIT_ACCORDIONver POB_25110805.jpg",
  "./images/album/DO IT/HAN_DOIT_DOver PHOTOCARD_25110205.jpg",
  "./images/album/DO IT/HAN_DOIT_ITver LENTICULAR BLACK_25110505.jpg",
  "./images/album/DO IT/HAN_DOIT_ITver LENTICULAR PINK_25110605.jpg",
  "./images/album/DO IT/HAN_DOIT_ITver PHOTOCARD_25110405.jpg",
  "./images/album/DO IT/HAN_DOIT_PLATFORMver PHOTOCARD_25111005.jpg",
  "./images/album/DO IT/HAN_DOIT_PLATFORMver POB_25111105.jpg",
  "./images/album/DO IT/HAN_DOIT_PLATFORMver SET_25110905.jpg",
  "./images/album/DO IT/HYUN_DOIT_ACCORDIONver PHOTOCARD_25110704.jpg",
  "./images/album/DO IT/HYUN_DOIT_ACCORDIONver POB_25110804.jpg",
  "./images/album/DO IT/HYUN_DOIT_DOver PHOTOCARD_25110204.jpg",
  "./images/album/DO IT/HYUN_DOIT_ITver LENTICULAR BLACK_25110504.jpg",
  "./images/album/DO IT/HYUN_DOIT_ITver LENTICULAR PINK_25110604.jpg",
  "./images/album/DO IT/HYUN_DOIT_ITver PHOTOCARD_25110404.jpg",
  "./images/album/DO IT/HYUN_DOIT_PLATFORMver PHOTOCARD_25111004.jpg",
  "./images/album/DO IT/HYUN_DOIT_PLATFORMver POB_25111104.jpg",
  "./images/album/DO IT/HYUN_DOIT_PLATFORMver SET_25110904.jpg",
  "./images/album/DO IT/IN_DOIT_ACCORDIONver PHOTOCARD_25110708.jpg",
  "./images/album/DO IT/IN_DOIT_ACCORDIONver POB_25110808.jpg",
  "./images/album/DO IT/IN_DOIT_DOver PHOTOCARD_25110208.jpg",
  "./images/album/DO IT/IN_DOIT_ITver LENTICULAR BLACK_25110508.jpg",
  "./images/album/DO IT/IN_DOIT_ITver LENTICULAR PINK_25110608.jpg",
  "./images/album/DO IT/IN_DOIT_ITver PHOTOCARD_25110408.jpg",
  "./images/album/DO IT/IN_DOIT_PLATFORMver PHOTOCARD_25111008.jpg",
  "./images/album/DO IT/IN_DOIT_PLATFORMver POB_25111108.jpg",
  "./images/album/DO IT/IN_DOIT_PLATFORMver SET_25110908.jpg",
  "./images/album/DO IT/KNOW_DOIT_ACCORDIONver PHOTOCARD_25110702.jpg",
  "./images/album/DO IT/KNOW_DOIT_ACCORDIONver POB_25110802.jpg",
  "./images/album/DO IT/KNOW_DOIT_DOver PHOTOCARD_25110202.jpg",
  "./images/album/DO IT/KNOW_DOIT_ITver LENTICULAR BLACK_25110502.jpg",
  "./images/album/DO IT/KNOW_DOIT_ITver LENTICULAR PINK_25110602.jpg",
  "./images/album/DO IT/KNOW_DOIT_ITver PHOTOCARD_25110402.jpg",
  "./images/album/DO IT/KNOW_DOIT_PLATFORMver PHOTOCARD_25111002.jpg",
  "./images/album/DO IT/KNOW_DOIT_PLATFORMver POB_25111102.jpg",
  "./images/album/DO IT/KNOW_DOIT_PLATFORMver SET_25110902.jpg",
  "./images/album/DO IT/LIX_DOIT_ACCORDIONver PHOTOCARD_25110706.jpg",
  "./images/album/DO IT/LIX_DOIT_ACCORDIONver POB_25110806.jpg",
  "./images/album/DO IT/LIX_DOIT_DOver PHOTOCARD_25110206.jpg",
  "./images/album/DO IT/LIX_DOIT_ITver LENTICULAR BLACK_25110506.jpg",
  "./images/album/DO IT/LIX_DOIT_ITver LENTICULAR PINK_25110606.jpg",
  "./images/album/DO IT/LIX_DOIT_ITver PHOTOCARD_25110406.jpg",
  "./images/album/DO IT/LIX_DOIT_PLATFORMver PHOTOCARD_25111006.jpg",
  "./images/album/DO IT/LIX_DOIT_PLATFORMver POB_25111106.jpg",
  "./images/album/DO IT/LIX_DOIT_PLATFORMver SET_25110906.jpg",
  "./images/album/DO IT/MIN_DOIT_ACCORDIONver PHOTOCARD_25110707.jpg",
  "./images/album/DO IT/MIN_DOIT_ACCORDIONver POB_25110807.jpg",
  "./images/album/DO IT/MIN_DOIT_DOver PHOTOCARD_25110207.jpg",
  "./images/album/DO IT/MIN_DOIT_ITver LENTICULAR BLACK_25110507.jpg",
  "./images/album/DO IT/MIN_DOIT_ITver LENTICULAR PINK_25110607.jpg",
  "./images/album/DO IT/MIN_DOIT_ITver PHOTOCARD_25110407.jpg",
  "./images/album/DO IT/MIN_DOIT_PLATFORMver PHOTOCARD_25111007.jpg",
  "./images/album/DO IT/MIN_DOIT_PLATFORMver POB_25111107.jpg",
  "./images/album/DO IT/MIN_DOIT_PLATFORMver SET_25110907.jpg",
  "./images/album/DO IT/SKZ_DOIT_DOver POB_25110309.jpg",
  "./images/album/DO IT/SKZ_DOIT_DOver POB_25110310.jpg",
  "./images/album/DO IT/SKZ_DOIT_DOver POB_25110311.jpg",
  "./images/album/DO IT/SKZ_DOIT_DOver POB_25110312.jpg",
  "./images/album/DO IT/SKZ_DOIT_DOver UNIT_25110109.jpg",
  "./images/album/DO IT/SKZ_DOIT_DOver UNIT_25110110.jpg",
  "./images/album/DO IT/SKZ_DOIT_DOver UNIT_25110111.jpg",
  "./images/album/DO IT/SKZ_DOIT_DOver UNIT_25110112.jpg",

  // === ALBUM / KARMA ===
  "./images/album/KARMA/BANG_KARMA_ACCORDIONver PHOTOCARD_25080501.jpg",
  "./images/album/KARMA/BANG_KARMA_ACCORDIONver POB_25080601.jpg",
  "./images/album/KARMA/BANG_KARMA_CEREMONYver PHOTOCARD_25080301.jpg",
  "./images/album/KARMA/BANG_KARMA_COMPACTver POB_25080701.jpg",
  "./images/album/KARMA/BANG_KARMA_HOORAYver PHOTOCARD_25080401.jpg",
  "./images/album/KARMA/BANG_KARMA_KARMAver PHOTOCARD_25080101.jpg",
  "./images/album/KARMA/BIN_KARMA_ACCORDIONver PHOTOCARD_25080503.jpg",
  "./images/album/KARMA/BIN_KARMA_ACCORDIONver POB_25080603.jpg",
  "./images/album/KARMA/BIN_KARMA_CEREMONYver PHOTOCARD_25080303.jpg",
  "./images/album/KARMA/BIN_KARMA_COMPACTver POB_25080703.jpg",
  "./images/album/KARMA/BIN_KARMA_HOORAYver PHOTOCARD_25080403.jpg",
  "./images/album/KARMA/BIN_KARMA_KARMAver PHOTOCARD_25080103.jpg",
  "./images/album/KARMA/HAN_KARMA_ACCORDIONver PHOTOCARD_25080505.jpg",
  "./images/album/KARMA/HAN_KARMA_ACCORDIONver POB_25080605.jpg",
  "./images/album/KARMA/HAN_KARMA_CEREMONYver PHOTOCARD_25080305.jpg",
  "./images/album/KARMA/HAN_KARMA_COMPACTver POB_25080705.jpg",
  "./images/album/KARMA/HAN_KARMA_HOORAYver PHOTOCARD_25080405.jpg",
  "./images/album/KARMA/HAN_KARMA_KARMAver PHOTOCARD_25080105.jpg",
  "./images/album/KARMA/HYUN_KARMA_ACCORDIONver PHOTOCARD_25080504.jpg",
  "./images/album/KARMA/HYUN_KARMA_ACCORDIONver POB_25080604.jpg",
  "./images/album/KARMA/HYUN_KARMA_CEREMONYver PHOTOCARD_25080304.jpg",
  "./images/album/KARMA/HYUN_KARMA_COMPACTver POB_25080704.jpg",
  "./images/album/KARMA/HYUN_KARMA_HOORAYver PHOTOCARD_25080404.jpg",
  "./images/album/KARMA/HYUN_KARMA_KARMAver PHOTOCARD_25080104.jpg",
  "./images/album/KARMA/IN_KARMA_ACCORDIONver PHOTOCARD_25080508.jpg",
  "./images/album/KARMA/IN_KARMA_ACCORDIONver POB_25080608.jpg",
  "./images/album/KARMA/IN_KARMA_CEREMONYver PHOTOCARD_25080308.jpg",
  "./images/album/KARMA/IN_KARMA_COMPACTver POB_25080708.jpg",
  "./images/album/KARMA/IN_KARMA_HOORAYver PHOTOCARD_25080408.jpg",
  "./images/album/KARMA/IN_KARMA_KARMAver PHOTOCARD_25080108.jpg",
  "./images/album/KARMA/KNOW_KARMA_ACCORDIONver PHOTOCARD_25080502.jpg",
  "./images/album/KARMA/KNOW_KARMA_ACCORDIONver POB_25080602.jpg",
  "./images/album/KARMA/KNOW_KARMA_CEREMONYver PHOTOCARD_25080302.jpg",
  "./images/album/KARMA/KNOW_KARMA_COMPACTver POB_25080702.jpg",
  "./images/album/KARMA/KNOW_KARMA_HOORAYver PHOTOCARD_25080402.jpg",
  "./images/album/KARMA/KNOW_KARMA_KARMAver PHOTOCARD_25080102.jpg",
  "./images/album/KARMA/LIX_KARMA_ACCORDIONver PHOTOCARD_25080506.jpg",
  "./images/album/KARMA/LIX_KARMA_ACCORDIONver POB_25080606.jpg",
  "./images/album/KARMA/LIX_KARMA_CEREMONYver PHOTOCARD_25080306.jpg",
  "./images/album/KARMA/LIX_KARMA_COMPACTver POB_25080706.jpg",
  "./images/album/KARMA/LIX_KARMA_HOORAYver PHOTOCARD_25080406.jpg",
  "./images/album/KARMA/LIX_KARMA_KARMAver PHOTOCARD_25080106.jpg",
  "./images/album/KARMA/MIN_KARMA_ACCORDIONver PHOTOCARD_25080507.jpg",
  "./images/album/KARMA/MIN_KARMA_ACCORDIONver POB_25080607.jpg",
  "./images/album/KARMA/MIN_KARMA_CEREMONYver PHOTOCARD_25080307.jpg",
  "./images/album/KARMA/MIN_KARMA_COMPACTver POB_25080707.jpg",
  "./images/album/KARMA/MIN_KARMA_HOORAYver PHOTOCARD_25080407.jpg",
  "./images/album/KARMA/MIN_KARMA_KARMAver PHOTOCARD_25080107.jpg",
  "./images/album/KARMA/SKZ_KARMA_KARMAver UNIT_25080209.jpg",
  "./images/album/KARMA/SKZ_KARMA_KARMAver UNIT_25080210.jpg",
  "./images/album/KARMA/SKZ_KARMA_KARMAver UNIT_25080211.jpg",

  // === BENEFIT / DO IT ===
  "./images/benefit/DO IT/BANG_DOIT_ALADIN_25111401.jpg",
  "./images/benefit/DO IT/BANG_DOIT_POP-UP LD 2ND_25111601.jpg",
  "./images/benefit/DO IT/BANG_DOIT_POP-UP MD 2ND_25111501.jpg",
  "./images/benefit/DO IT/BANG_DOIT_POP-UP STAMP_25111701.jpg",
  "./images/benefit/DO IT/BANG_DOIT_SOUNDWAVE_25111201.jpg",
  "./images/benefit/DO IT/BANG_DOIT_YES24_25111301.jpg",
  "./images/benefit/DO IT/BIN_DOIT_ALADIN_25111403.jpg",
  "./images/benefit/DO IT/BIN_DOIT_POP-UP LD 2ND_25111603.jpg",
  "./images/benefit/DO IT/BIN_DOIT_POP-UP MD 2ND_25111503.jpg",
  "./images/benefit/DO IT/BIN_DOIT_POP-UP STAMP_25111703.jpg",
  "./images/benefit/DO IT/BIN_DOIT_SOUNDWAVE_25111203.jpg",
  "./images/benefit/DO IT/BIN_DOIT_YES24_25111303.jpg",
  "./images/benefit/DO IT/HAN_DOIT_ALADIN_25111405.jpg",
  "./images/benefit/DO IT/HAN_DOIT_POP-UP LD 2ND_25111605.jpg",
  "./images/benefit/DO IT/HAN_DOIT_POP-UP MD 2ND_25111505.jpg",
  "./images/benefit/DO IT/HAN_DOIT_POP-UP STAMP_25111705.jpg",
  "./images/benefit/DO IT/HAN_DOIT_SOUNDWAVE_25111205.jpg",
  "./images/benefit/DO IT/HAN_DOIT_YES24_25111305.jpg",
  "./images/benefit/DO IT/LIX_DOIT_YES24_25111306.jpg",
  "./images/benefit/DO IT/HYUN_DOIT_ALADIN_25111404.jpg",
  "./images/benefit/DO IT/HYUN_DOIT_POP-UP LD 2ND_25111604.jpg",
  "./images/benefit/DO IT/HYUN_DOIT_POP-UP MD 2ND_25111504.jpg",
  "./images/benefit/DO IT/HYUN_DOIT_POP-UP STAMP_25111704.jpg",
  "./images/benefit/DO IT/HYUN_DOIT_SOUNDWAVE_25111204.jpg",
  "./images/benefit/DO IT/HYUN_DOIT_YES24_25111304.jpg",
  "./images/benefit/DO IT/IN_DOIT_ALADIN_25111408.jpg",
  "./images/benefit/DO IT/IN_DOIT_POP-UP LD 2ND_25111608.jpg",
  "./images/benefit/DO IT/IN_DOIT_POP-UP MD 2ND_25111508.jpg",
  "./images/benefit/DO IT/IN_DOIT_POP-UP STAMP_25111708.jpg",
  "./images/benefit/DO IT/IN_DOIT_SOUNDWAVE_25111208.jpg",
  "./images/benefit/DO IT/IN_DOIT_YES24_25111308.jpg",
  "./images/benefit/DO IT/KNOW_DOIT_ALADIN_25111402.jpg",
  "./images/benefit/DO IT/KNOW_DOIT_POP-UP LD 2ND_25111602.jpg",
  "./images/benefit/DO IT/KNOW_DOIT_POP-UP MD 2ND_25111502.jpg",
  "./images/benefit/DO IT/KNOW_DOIT_POP-UP STAMP_25111702.jpg",
  "./images/benefit/DO IT/KNOW_DOIT_SOUNDWAVE_25111202.jpg",
  "./images/benefit/DO IT/KNOW_DOIT_YES24_25111302.jpg",
  "./images/benefit/DO IT/LIX_DOIT_ALADIN_25111406.jpg",
  "./images/benefit/DO IT/LIX_DOIT_POP-UP LD 2ND_25111606.jpg",
  "./images/benefit/DO IT/LIX_DOIT_POP-UP MD 2ND_25111506.jpg",
  "./images/benefit/DO IT/LIX_DOIT_POP-UP STAMP_25111706.jpg",
  "./images/benefit/DO IT/LIX_DOIT_SOUNDWAVE_25111206.jpg",
  "./images/benefit/DO IT/MIN_DOIT_ALADIN_25111407.jpg",
  "./images/benefit/DO IT/MIN_DOIT_POP-UP LD 2ND_25111607.jpg",
  "./images/benefit/DO IT/MIN_DOIT_POP-UP MD 2ND_25111507.jpg",
  "./images/benefit/DO IT/MIN_DOIT_POP-UP STAMP_25111707.jpg",
  "./images/benefit/DO IT/MIN_DOIT_SOUNDWAVE_25111207.jpg",
  "./images/benefit/DO IT/MIN_DOIT_YES24_25111307.jpg",

  // === BENEFIT / KARMA ===
  "./images/benefit/KARMA/BANG_KARMA_APPLEMUSIC_25080901.jpg",
  "./images/benefit/KARMA/BANG_KARMA_FANS SHOP LISTENING_25081101.jpg",
  "./images/benefit/KARMA/BANG_KARMA_FANS SHOP_25081001.jpg",
  "./images/benefit/KARMA/BANG_KARMA_POP-UP LD 1ST_25081401.jpg",
  "./images/benefit/KARMA/BANG_KARMA_POP-UP MD 1ST_25081201.jpg",
  "./images/benefit/KARMA/BANG_KARMA_POP-UP STAMP_25081501.jpg",
  "./images/benefit/KARMA/BANG_KARMA_SOUNDWAVE_25080801.jpg",
  "./images/benefit/KARMA/BIN_KARMA_APPLEMUSIC_25080903.jpg",
  "./images/benefit/KARMA/BIN_KARMA_FANS SHOP LISTENING_25081103.jpg",
  "./images/benefit/KARMA/BIN_KARMA_FANS SHOP_25081003.jpg",
  "./images/benefit/KARMA/BIN_KARMA_POP-UP LD 1ST_25081403.jpg",
  "./images/benefit/KARMA/BIN_KARMA_POP-UP MD 1ST_25081203.jpg",
  "./images/benefit/KARMA/BIN_KARMA_POP-UP STAMP_25081503.jpg",
  "./images/benefit/KARMA/BIN_KARMA_SOUNDWAVE_25080803.jpg",
  "./images/benefit/KARMA/HAN_KARMA_APPLEMUSIC_25080905.jpg",
  "./images/benefit/KARMA/HAN_KARMA_FANS SHOP LISTENING_25081105.jpg",
  "./images/benefit/KARMA/HAN_KARMA_FANS SHOP_25081005.jpg",
  "./images/benefit/KARMA/HAN_KARMA_POP-UP LD 1ST_25081405.jpg",
  "./images/benefit/KARMA/HAN_KARMA_POP-UP MD 1ST_25081205.jpg",
  "./images/benefit/KARMA/HAN_KARMA_POP-UP STAMP_25081505.jpg",
  "./images/benefit/KARMA/HAN_KARMA_SOUNDWAVE_25080805.jpg",
  "./images/benefit/KARMA/HYUN_KARMA_APPLEMUSIC_25080904.jpg",
  "./images/benefit/KARMA/HYUN_KARMA_FANS SHOP LISTENING_25081104.jpg",
  "./images/benefit/KARMA/HYUN_KARMA_FANS SHOP_25081004.jpg",
  "./images/benefit/KARMA/HYUN_KARMA_POP-UP LD 1ST_25081404.jpg",
  "./images/benefit/KARMA/HYUN_KARMA_POP-UP MD 1ST_25081204.jpg",
  "./images/benefit/KARMA/HYUN_KARMA_POP-UP STAMP_25081504.jpg",
  "./images/benefit/KARMA/HYUN_KARMA_SOUNDWAVE_25080804.jpg",
  "./images/benefit/KARMA/IN_KARMA_APPLEMUSIC_25080908.jpg",
  "./images/benefit/KARMA/IN_KARMA_FANS SHOP LISTENING_25081108.jpg",
  "./images/benefit/KARMA/IN_KARMA_FANS SHOP_25081008.jpg",
  "./images/benefit/KARMA/IN_KARMA_POP-UP LD 1ST_25081408.jpg",
  "./images/benefit/KARMA/IN_KARMA_POP-UP MD 1ST_25081208.jpg",
  "./images/benefit/KARMA/IN_KARMA_POP-UP STAMP_25081508.jpg",
  "./images/benefit/KARMA/IN_KARMA_SOUNDWAVE_25080808.jpg",
  "./images/benefit/KARMA/KNOW_KARMA_APPLEMUSIC_25080902.jpg",
  "./images/benefit/KARMA/KNOW_KARMA_FANS SHOP LISTENING_25081102.jpg",
  "./images/benefit/KARMA/KNOW_KARMA_FANS SHOP_25081002.jpg",
  "./images/benefit/KARMA/KNOW_KARMA_POP-UP LD 1ST_25081402.jpg",
  "./images/benefit/KARMA/KNOW_KARMA_POP-UP MD 1ST_25081202.jpg",
  "./images/benefit/KARMA/KNOW_KARMA_POP-UP STAMP_25081502.jpg",
  "./images/benefit/KARMA/KNOW_KARMA_SOUNDWAVE_25080802.jpg",
  "./images/benefit/KARMA/LIX_KARMA_APPLEMUSIC_25080906.jpg",
  "./images/benefit/KARMA/LIX_KARMA_FANS SHOP LISTENING_25081106.jpg",
  "./images/benefit/KARMA/LIX_KARMA_FANS SHOP_25081006.jpg",
  "./images/benefit/KARMA/LIX_KARMA_POP-UP LD 1ST_25081406.jpg",
  "./images/benefit/KARMA/LIX_KARMA_POP-UP MD 1ST_25081206.jpg",
  "./images/benefit/KARMA/LIX_KARMA_POP-UP STAMP_25081506.jpg",
  "./images/benefit/KARMA/LIX_KARMA_SOUNDWAVE_25080806.jpg",
  "./images/benefit/KARMA/MIN_KARMA_APPLEMUSIC_25080907.jpg",
  "./images/benefit/KARMA/MIN_KARMA_FANS SHOP LISTENING_25081107.jpg",
  "./images/benefit/KARMA/MIN_KARMA_FANS SHOP_25081007.jpg",
  "./images/benefit/KARMA/MIN_KARMA_POP-UP LD 1ST_25081407.jpg",
  "./images/benefit/KARMA/MIN_KARMA_POP-UP MD 1ST_25081207.jpg",
  "./images/benefit/KARMA/MIN_KARMA_POP-UP STAMP_25081507.jpg",
  "./images/benefit/KARMA/MIN_KARMA_SOUNDWAVE_25080807.jpg",
  "./images/benefit/KARMA/SKZ_KARMA_POP-UP ALBUM SET PURCHASE 1ST_25081309.jpg",
  "./images/benefit/KARMA/SKZ_KARMA_POP-UP ALBUM SET PURCHASE 1ST_25081310.jpg",
  "./images/benefit/KARMA/SKZ_KARMA_POP-UP ALBUM SET PURCHASE 1ST_25081311.jpg",

// === ALBUM / HOP ===
"./images/album/HOP/BANG_HOP_ACCORDIONver Monochrome_24120701.jpg",
"./images/album/HOP/BANG_HOP_ACCORDIONver Photocard_24120601.jpg",
"./images/album/HOP/BANG_HOP_ACCORDIONver POB_24120801.jpg",
"./images/album/HOP/BANG_HOP_HIPTAPEver Photocard_24120101.jpg",
"./images/album/HOP/BANG_HOP_HIPTAPEver Trading Card_24120301.jpg",
"./images/album/HOP/BANG_HOP_HIPTAPEver Trading Card_24120311.jpg",
"./images/album/HOP/BANG_HOP_PLATFORMver Photocard_24121001.jpg",
"./images/album/HOP/BANG_HOP_PLATFORMver Set_24120901.jpg",
"./images/album/HOP/BANG_HOP_SKZHOPver Photocard_24120401.jpg",
"./images/album/HOP/BIN_HOP_ACCORDIONver Monochrome_24120703.jpg",
"./images/album/HOP/BIN_HOP_ACCORDIONver Photocard_24120603.jpg",
"./images/album/HOP/BIN_HOP_ACCORDIONver POB_24120803.jpg",
"./images/album/HOP/BIN_HOP_HIPTAPEver Photocard_24120103.jpg",
"./images/album/HOP/BIN_HOP_HIPTAPEver Trading Card_24120303.jpg",
"./images/album/HOP/BIN_HOP_HIPTAPEver Trading Card_24120313.jpg",
"./images/album/HOP/BIN_HOP_PLATFORMver Photocard_24121003.jpg",
"./images/album/HOP/BIN_HOP_PLATFORMver Set_24120903.jpg",
"./images/album/HOP/BIN_HOP_SKZHOPver Photocard_24120403.jpg",
"./images/album/HOP/HAN_HOP_ACCORDIONver Monochrome_24120705.jpg",
"./images/album/HOP/HAN_HOP_ACCORDIONver Photocard_24120605.jpg",
"./images/album/HOP/HAN_HOP_ACCORDIONver POB_24120805.jpg",
"./images/album/HOP/HAN_HOP_HIPTAPEver Photocard_24120105.jpg",
"./images/album/HOP/HAN_HOP_HIPTAPEver Trading Card_24120305.jpg",
"./images/album/HOP/HAN_HOP_HIPTAPEver Trading Card_24120315.jpg",
"./images/album/HOP/HAN_HOP_PLATFORMver Photocard_24121005.jpg",
"./images/album/HOP/HAN_HOP_PLATFORMver Set_24120905.jpg",
"./images/album/HOP/HAN_HOP_SKZHOPver Photocard_24120405.jpg",
"./images/album/HOP/HYUN_HOP_ACCORDIONver Monochrome_24120704.jpg",
"./images/album/HOP/HYUN_HOP_ACCORDIONver Photocard_24120604.jpg",
"./images/album/HOP/HYUN_HOP_ACCORDIONver POB_24120804.jpg",
"./images/album/HOP/HYUN_HOP_HIPTAPEver Photocard_24120104.jpg",
"./images/album/HOP/HYUN_HOP_HIPTAPEver Trading Card_24120304.jpg",
"./images/album/HOP/HYUN_HOP_HIPTAPEver Trading Card_24120314.jpg",
"./images/album/HOP/HYUN_HOP_PLATFORMver Photocard_24121004.jpg",
"./images/album/HOP/HYUN_HOP_PLATFORMver Set_24120904.jpg",
"./images/album/HOP/HYUN_HOP_SKZHOPver Photocard_24120404.jpg",
"./images/album/HOP/IN_HOP_ACCORDIONver Monochrome_24120708.jpg",
"./images/album/HOP/IN_HOP_ACCORDIONver Photocard_24120608.jpg",
"./images/album/HOP/IN_HOP_ACCORDIONver POB_24120808.jpg",
"./images/album/HOP/IN_HOP_HIPTAPEver Photocard_24120108.jpg",
"./images/album/HOP/IN_HOP_HIPTAPEver Trading Card_24120308.jpg",
"./images/album/HOP/IN_HOP_HIPTAPEver Trading Card_24120318.jpg",
"./images/album/HOP/IN_HOP_PLATFORMver Photocard_24121008.jpg",
"./images/album/HOP/IN_HOP_PLATFORMver Set_24120908.jpg",
"./images/album/HOP/IN_HOP_SKZHOPver Photocard_24120408.jpg",
"./images/album/HOP/KNOW_HOP_ACCORDIONver Monochrome_24120702.jpg",
"./images/album/HOP/KNOW_HOP_ACCORDIONver Photocard_24120602.jpg",
"./images/album/HOP/KNOW_HOP_ACCORDIONver POB_24120802.jpg",
"./images/album/HOP/KNOW_HOP_HIPTAPEver Photocard_24120102.jpg",
"./images/album/HOP/KNOW_HOP_HIPTAPEver Trading Card_24120302.jpg",
"./images/album/HOP/KNOW_HOP_HIPTAPEver Trading Card_24120312.jpg",
"./images/album/HOP/KNOW_HOP_PLATFORMver Photocard_24121002.jpg",
"./images/album/HOP/KNOW_HOP_PLATFORMver Set_24120902.jpg",
"./images/album/HOP/KNOW_HOP_SKZHOPver Photocard_24120402.jpg",
"./images/album/HOP/LIX_HOP_ACCORDIONver Monochrome_24120706.jpg",
"./images/album/HOP/LIX_HOP_ACCORDIONver Photocard_24120606.jpg",
"./images/album/HOP/LIX_HOP_ACCORDIONver POB_24120806.jpg",
"./images/album/HOP/LIX_HOP_HIPTAPEver Photocard_24120106.jpg",
"./images/album/HOP/LIX_HOP_HIPTAPEver Trading Card_24120306.jpg",
"./images/album/HOP/LIX_HOP_HIPTAPEver Trading Card_24120316.jpg",
"./images/album/HOP/LIX_HOP_PLATFORMver Photocard_24121006.jpg",
"./images/album/HOP/LIX_HOP_PLATFORMver Set_24120906.jpg",
"./images/album/HOP/LIX_HOP_SKZHOPver Photocard_24120406.jpg",
"./images/album/HOP/MIN_HOP_ACCORDIONver Monochrome_24120707.jpg",
"./images/album/HOP/MIN_HOP_ACCORDIONver Photocard_24120607.jpg",
"./images/album/HOP/MIN_HOP_ACCORDIONver POB_24120807.jpg",
"./images/album/HOP/MIN_HOP_HIPTAPEver Photocard_24120107.jpg",
"./images/album/HOP/MIN_HOP_HIPTAPEver Trading Card_24120307.jpg",
"./images/album/HOP/MIN_HOP_HIPTAPEver Trading Card_24120317.jpg",
"./images/album/HOP/MIN_HOP_PLATFORMver Photocard_24121007.jpg",
"./images/album/HOP/MIN_HOP_PLATFORMver Set_24120907.jpg",
"./images/album/HOP/MIN_HOP_SKZHOPver Photocard_24120407.jpg",
"./images/album/HOP/SKZ_HOP_HIPTAPEver UNIT_24120209.jpg",
"./images/album/HOP/SKZ_HOP_HIPTAPEver UNIT_24120210.jpg",
"./images/album/HOP/SKZ_HOP_HIPTAPEver UNIT_24120211.jpg",
"./images/album/HOP/SKZ_HOP_HIPTAPEver UNIT_24120212.jpg",
"./images/album/HOP/SKZ_HOP_SKZHOPver UNIT_24120509.jpg",
"./images/album/HOP/SKZ_HOP_SKZHOPver UNIT_24120510.jpg",
"./images/album/HOP/SKZ_HOP_SKZHOPver UNIT_24120511.jpg",
"./images/album/HOP/SKZ_HOP_SKZHOPver UNIT_24120512.jpg",

// === ALBUM / ATE ===
"./images/album/ATE/BANG_ATE_ACCORDIONver Photocard_24070401.jpg",
"./images/album/ATE/BANG_ATE_ACCORDIONver POB_24070501.jpg",
"./images/album/ATE/BANG_ATE_ATEver Photocard_24070101.jpg",
"./images/album/ATE/BANG_ATE_CHK CHKver & BOOMver Photocard_24070201.jpg",
"./images/album/ATE/BANG_ATE_CHK CHKver & BOOMver Photocard_24070211.jpg",
"./images/album/ATE/BANG_ATE_LETTERver POB_24070601.jpg",
"./images/album/ATE/BANG_ATE_PLATFORM A ver Photocard_24070801.jpg",
"./images/album/ATE/BANG_ATE_PLATFORM A ver Set_24070701.jpg",
"./images/album/ATE/BANG_ATE_PLATFORM B ver Photocard_24071001.jpg",
"./images/album/ATE/BANG_ATE_PLATFORM B ver Set_24070901.jpg",
"./images/album/ATE/BIN_ATE_ACCORDIONver Photocard_24070403.jpg",
"./images/album/ATE/BIN_ATE_ACCORDIONver POB_24070503.jpg",
"./images/album/ATE/BIN_ATE_ATEver Photocard_24070103.jpg",
"./images/album/ATE/BIN_ATE_CHK CHKver & BOOMver Photocard_24070203.jpg",
"./images/album/ATE/BIN_ATE_CHK CHKver & BOOMver Photocard_24070213.jpg",
"./images/album/ATE/BIN_ATE_LETTERver POB_24070603.jpg",
"./images/album/ATE/BIN_ATE_PLATFORM A ver Photocard_24070803.jpg",
"./images/album/ATE/BIN_ATE_PLATFORM A ver Set_24070703.jpg",
"./images/album/ATE/BIN_ATE_PLATFORM B ver Photocard_24071003.jpg",
"./images/album/ATE/BIN_ATE_PLATFORM B ver Set_24070903.jpg",
"./images/album/ATE/HAN_ATE_ACCORDIONver Photocard_24070405.jpg",
"./images/album/ATE/HAN_ATE_ACCORDIONver POB_24070505.jpg",
"./images/album/ATE/HAN_ATE_ATEver Photocard_24070105.jpg",
"./images/album/ATE/HAN_ATE_CHK CHKver & BOOMver Photocard_24070205.jpg",
"./images/album/ATE/HAN_ATE_CHK CHKver & BOOMver Photocard_24070215.jpg",
"./images/album/ATE/HAN_ATE_LETTERver POB_24070605.jpg",
"./images/album/ATE/HAN_ATE_PLATFORM A ver Photocard_24070805.jpg",
"./images/album/ATE/HAN_ATE_PLATFORM A ver Set_24070705.jpg",
"./images/album/ATE/HAN_ATE_PLATFORM B ver Photocard_24071005.jpg",
"./images/album/ATE/HAN_ATE_PLATFORM B ver Set_24070905.jpg",
"./images/album/ATE/HYUN_ATE_ACCORDIONver Photocard_24070404.jpg",
"./images/album/ATE/HYUN_ATE_ACCORDIONver POB_24070504.jpg",
"./images/album/ATE/HYUN_ATE_ATEver Photocard_24070104.jpg",
"./images/album/ATE/HYUN_ATE_CHK CHKver & BOOMver Photocard_24070204.jpg",
"./images/album/ATE/HYUN_ATE_CHK CHKver & BOOMver Photocard_24070214.jpg",
"./images/album/ATE/HYUN_ATE_LETTERver POB_24070604.jpg",
"./images/album/ATE/HYUN_ATE_PLATFORM A ver Photocard_24070804.jpg",
"./images/album/ATE/HYUN_ATE_PLATFORM A ver Set_24070704.jpg",
"./images/album/ATE/HYUN_ATE_PLATFORM B ver Photocard_24071004.jpg",
"./images/album/ATE/HYUN_ATE_PLATFORM B ver Set_24070904.jpg",
"./images/album/ATE/IN_ATE_ACCORDIONver Photocard_24070408.jpg",
"./images/album/ATE/IN_ATE_ACCORDIONver POB_24070508.jpg",
"./images/album/ATE/IN_ATE_ATEver Photocard_24070108.jpg",
"./images/album/ATE/IN_ATE_CHK CHKver & BOOMver Photocard_24070208.jpg",
"./images/album/ATE/IN_ATE_CHK CHKver & BOOMver Photocard_24070218.jpg",
"./images/album/ATE/IN_ATE_LETTERver POB_24070608.jpg",
"./images/album/ATE/IN_ATE_PLATFORM A ver Photocard_24070808.jpg",
"./images/album/ATE/IN_ATE_PLATFORM A ver Set_24070708.jpg",
"./images/album/ATE/IN_ATE_PLATFORM B ver Photocard_24071008.jpg",
"./images/album/ATE/IN_ATE_PLATFORM B ver Set_24070908.jpg",
"./images/album/ATE/KNOW_ATE_ACCORDIONver Photocard_24070402.jpg",
"./images/album/ATE/KNOW_ATE_ACCORDIONver POB_24070502.jpg",
"./images/album/ATE/KNOW_ATE_ATEver Photocard_24070102.jpg",
"./images/album/ATE/KNOW_ATE_CHK CHKver & BOOMver Photocard_24070202.jpg",
"./images/album/ATE/KNOW_ATE_CHK CHKver & BOOMver Photocard_24070212.jpg",
"./images/album/ATE/KNOW_ATE_LETTERver POB_24070602.jpg",
"./images/album/ATE/KNOW_ATE_PLATFORM A ver Photocard_24070802.jpg",
"./images/album/ATE/KNOW_ATE_PLATFORM A ver Set_24070702.jpg",
"./images/album/ATE/KNOW_ATE_PLATFORM B ver Photocard_24071002.jpg",
"./images/album/ATE/KNOW_ATE_PLATFORM B ver Set_24070902.jpg",
"./images/album/ATE/LIX_ATE_ACCORDIONver Photocard_24070406.jpg",
"./images/album/ATE/LIX_ATE_ACCORDIONver POB_24070506.jpg",
"./images/album/ATE/LIX_ATE_ATEver Photocard_24070106.jpg",
"./images/album/ATE/LIX_ATE_CHK CHKver & BOOMver Photocard_24070206.jpg",
"./images/album/ATE/LIX_ATE_CHK CHKver & BOOMver Photocard_24070216.jpg",
"./images/album/ATE/LIX_ATE_LETTERver POB_24070606.jpg",
"./images/album/ATE/LIX_ATE_PLATFORM A ver Photocard_24070806.jpg",
"./images/album/ATE/LIX_ATE_PLATFORM A ver Set_24070706.jpg",
"./images/album/ATE/LIX_ATE_PLATFORM B ver Photocard_24071006.jpg",
"./images/album/ATE/LIX_ATE_PLATFORM B ver Set_24070906.jpg",
"./images/album/ATE/MIN_ATE_ACCORDIONver Photocard_24070407.jpg",
"./images/album/ATE/MIN_ATE_ACCORDIONver POB_24070507.jpg",
"./images/album/ATE/MIN_ATE_ATEver Photocard_24070107.jpg",
"./images/album/ATE/MIN_ATE_CHK CHKver & BOOMver Photocard_24070207.jpg",
"./images/album/ATE/MIN_ATE_CHK CHKver & BOOMver Photocard_24070217.jpg",
"./images/album/ATE/MIN_ATE_LETTERver POB_24070607.jpg",
"./images/album/ATE/MIN_ATE_PLATFORM A ver Photocard_24070807.jpg",
"./images/album/ATE/MIN_ATE_PLATFORM A ver Set_24070707.jpg",
"./images/album/ATE/MIN_ATE_PLATFORM B ver Photocard_24071007.jpg",
"./images/album/ATE/MIN_ATE_PLATFORM B ver Set_24070907.jpg",
"./images/album/ATE/SKZ_ATE_CHK CHKver & BOOMver UNIT_24070309.jpg",
"./images/album/ATE/SKZ_ATE_CHK CHKver & BOOMver UNIT_24070310.jpg",
"./images/album/ATE/SKZ_ATE_CHK CHKver & BOOMver UNIT_24070311.jpg",
"./images/album/ATE/SKZ_ATE_CHK CHKver & BOOMver UNIT_24070312.jpg",
"./images/album/ATE/SKZ_ATE_CHK CHKver & BOOMver UNIT_24070313.jpg",
"./images/album/ATE/SKZ_ATE_CHK CHKver & BOOMver UNIT_24070314.jpg",
"./images/album/ATE/SKZ_ATE_CHK CHKver & BOOMver UNIT_24070315.jpg",
"./images/album/ATE/SKZ_ATE_CHK CHKver & BOOMver UNIT_24070316.jpg",

// === BENEFIT / 2025 SG ===
"./images/benefit/2025 SG/BANG_2025 SG_JYP SHOP_24121701.jpg",
"./images/benefit/2025 SG/KNOW_2025 SG_JYP SHOP_24121702.jpg",
"./images/benefit/2025 SG/BIN_2025 SG_JYP SHOP_24121703.jpg",
"./images/benefit/2025 SG/HYUN_2025 SG_JYP SHOP_24121704.jpg",
"./images/benefit/2025 SG/HAN_2025 SG_JYP SHOP_24121705.jpg",
"./images/benefit/2025 SG/LIX_2025 SG_JYP SHOP_24121706.jpg",
"./images/benefit/2025 SG/MIN_2025 SG_JYP SHOP_24121707.jpg",
"./images/benefit/2025 SG/IN_2025 SG_JYP SHOP_24121708.jpg",

// === BENEFIT / 2026 SG ===
"./images/benefit/2026 SG/BANG_2026SG_YES24_25120301.jpg",
"./images/benefit/2026 SG/KNOW_2026SG_YES24_25120302.jpg",
"./images/benefit/2026 SG/BIN_2026SG_YES24_25120303.jpg",
"./images/benefit/2026 SG/HYUN_2026SG_YES24_25120304.jpg",
"./images/benefit/2026 SG/HAN_2026SG_YES24_25120305.jpg",
"./images/benefit/2026 SG/LIX_2026SG_YES24_25120306.jpg",
"./images/benefit/2026 SG/MIN_2026SG_YES24_25120307.jpg",
"./images/benefit/2026 SG/IN_2026SG_YES24_25120308.jpg",

// === BENEFIT / ATE ===
"./images/benefit/ATE/BANG_ATE_JYP SHOP PLATFROMver_24071201.jpg",
"./images/benefit/ATE/BANG_ATE_JYP SHOP_24071101.jpg",
"./images/benefit/ATE/BANG_ATE_POP-UP LD_24071601.jpg",
"./images/benefit/ATE/BANG_ATE_POP-UP LD_24071611.jpg",
"./images/benefit/ATE/BANG_ATE_POP-UP MD_24071501.jpg",
"./images/benefit/ATE/BANG_ATE_YES24_24071301.jpg",
"./images/benefit/ATE/BIN_ATE_JYP SHOP PLATFROMver_24071203.jpg",
"./images/benefit/ATE/BIN_ATE_JYP SHOP_24071103.jpg",
"./images/benefit/ATE/BIN_ATE_POP-UP LD_24071603.jpg",
"./images/benefit/ATE/BIN_ATE_POP-UP LD_24071613.jpg",
"./images/benefit/ATE/BIN_ATE_POP-UP MD_24071503.jpg",
"./images/benefit/ATE/BIN_ATE_YES24_24071303.jpg",
"./images/benefit/ATE/HAN_ATE_JYP SHOP PLATFROMver_24071205.jpg",
"./images/benefit/ATE/HAN_ATE_JYP SHOP_24071105.jpg",
"./images/benefit/ATE/HAN_ATE_POP-UP LD_24071605.jpg",
"./images/benefit/ATE/HAN_ATE_POP-UP LD_24071615.jpg",
"./images/benefit/ATE/HAN_ATE_POP-UP MD_24071505.jpg",
"./images/benefit/ATE/HAN_ATE_YES24_24071305.jpg",
"./images/benefit/ATE/HYUN_ATE_JYP SHOP PLATFROMver_24071204.jpg",
"./images/benefit/ATE/HYUN_ATE_JYP SHOP_24071104.jpg",
"./images/benefit/ATE/HYUN_ATE_POP-UP LD_24071604.jpg",
"./images/benefit/ATE/HYUN_ATE_POP-UP LD_24071614.jpg",
"./images/benefit/ATE/HYUN_ATE_POP-UP MD_24071504.jpg",
"./images/benefit/ATE/HYUN_ATE_YES24_24071304.jpg",
"./images/benefit/ATE/IN_ATE_JYP SHOP PLATFROMver_24071208.jpg",
"./images/benefit/ATE/IN_ATE_JYP SHOP_24071108.jpg",
"./images/benefit/ATE/IN_ATE_POP-UP LD_24071608.jpg",
"./images/benefit/ATE/IN_ATE_POP-UP LD_24071618.jpg",
"./images/benefit/ATE/IN_ATE_POP-UP MD_24071508.jpg",
"./images/benefit/ATE/IN_ATE_YES24_24071308.jpg",
"./images/benefit/ATE/KNOW_ATE_JYP SHOP PLATFROMver_24071202.jpg",
"./images/benefit/ATE/KNOW_ATE_JYP SHOP_24071102.jpg",
"./images/benefit/ATE/KNOW_ATE_POP-UP LD_24071602.jpg",
"./images/benefit/ATE/KNOW_ATE_POP-UP LD_24071612.jpg",
"./images/benefit/ATE/KNOW_ATE_POP-UP MD_24071502.jpg",
"./images/benefit/ATE/KNOW_ATE_YES24_24071302.jpg",
"./images/benefit/ATE/LIX_ATE_JYP SHOP PLATFROMver_24071206.jpg",
"./images/benefit/ATE/LIX_ATE_JYP SHOP_24071106.jpg",
"./images/benefit/ATE/LIX_ATE_POP-UP LD_24071606.jpg",
"./images/benefit/ATE/LIX_ATE_POP-UP LD_24071616.jpg",
"./images/benefit/ATE/LIX_ATE_POP-UP MD_24071506.jpg",
"./images/benefit/ATE/LIX_ATE_YES24_24071306.jpg",
"./images/benefit/ATE/MIN_ATE_JYP SHOP PLATFROMver_24071207.jpg",
"./images/benefit/ATE/MIN_ATE_JYP SHOP_24071107.jpg",
"./images/benefit/ATE/MIN_ATE_POP-UP LD_24071607.jpg",
"./images/benefit/ATE/MIN_ATE_POP-UP LD_24071617.jpg",
"./images/benefit/ATE/MIN_ATE_POP-UP MD_24071507.jpg",
"./images/benefit/ATE/MIN_ATE_YES24_24071307.jpg",

// === BENEFIT / celebrATE ===
"./images/benefit/celebrATE/BANG_celebrATE_FANS SHOP MD_25100401.jpg",
"./images/benefit/celebrATE/BANG_celebrATE_OFFLINE MD_25100301.jpg",
"./images/benefit/celebrATE/KNOW_celebrATE_FANS SHOP MD_25100402.jpg",
"./images/benefit/celebrATE/KNOW_celebrATE_OFFLINE MD_25100302.jpg",
"./images/benefit/celebrATE/BIN_celebrATE_FANS SHOP MD_25100403.jpg",
"./images/benefit/celebrATE/BIN_celebrATE_OFFLINE MD_25100303.jpg",
"./images/benefit/celebrATE/HYUN_celebrATE_FANS SHOP MD_25100404.jpg",
"./images/benefit/celebrATE/HYUN_celebrATE_OFFLINE MD_25100304.jpg",
"./images/benefit/celebrATE/HAN_celebrATE_FANS SHOP MD_25100405.jpg",
"./images/benefit/celebrATE/HAN_celebrATE_OFFLINE MD_25100305.jpg",
"./images/benefit/celebrATE/LIX_celebrATE_FANS SHOP MD_25100406.jpg",
"./images/benefit/celebrATE/LIX_celebrATE_OFFLINE MD_25100306.jpg",
"./images/benefit/celebrATE/MIN_celebrATE_FANS SHOP MD_25100407.jpg",
"./images/benefit/celebrATE/MIN_celebrATE_OFFLINE MD_25100307.jpg",
"./images/benefit/celebrATE/IN_celebrATE_FANS SHOP MD_25100408.jpg",
"./images/benefit/celebrATE/IN_celebrATE_OFFLINE MD_25100308.jpg",

// === BENEFIT / dominATE ===
"./images/benefit/dominATE/BANG_dominATE_JYP SHOP MD_24080801.jpg",
"./images/benefit/dominATE/KNOW_dominATE_JYP SHOP MD_24080802.jpg",
"./images/benefit/dominATE/BIN_dominATE_JYP SHOP MD_24080803.jpg",
"./images/benefit/dominATE/HYUN_dominATE_JYP SHOP MD_24080804.jpg",
"./images/benefit/dominATE/HAN_dominATE_JYP SHOP MD_24080805.jpg",
"./images/benefit/dominATE/LIX_dominATE_JYP SHOP MD_24080806.jpg",
"./images/benefit/dominATE/MIN_dominATE_JYP SHOP MD_24080807.jpg",
"./images/benefit/dominATE/IN_dominATE_JYP SHOP MD_24080808.jpg",

// === BENEFIT / HOP ===
"./images/benefit/HOP/BANG_HOP_JYP SHOP PLATFORMver_24121201.jpg",
"./images/benefit/HOP/BANG_HOP_JYP SHOP_24121101.jpg",
"./images/benefit/HOP/BANG_HOP_POP-UP Album Purchase_24121401.jpg",
"./images/benefit/HOP/BANG_HOP_POP-UP LD_24121501.jpg",
"./images/benefit/HOP/BANG_HOP_POP-UP LD_24121511.jpg",
"./images/benefit/HOP/BANG_HOP_POP-UP MD_24121301.jpg",
"./images/benefit/HOP/BIN_HOP_JYP SHOP PLATFORMver_24121203.jpg",
"./images/benefit/HOP/BIN_HOP_JYP SHOP_24121103.jpg",
"./images/benefit/HOP/BIN_HOP_POP-UP Album Purchase_24121403.jpg",
"./images/benefit/HOP/BIN_HOP_POP-UP LD_24121503.jpg",
"./images/benefit/HOP/BIN_HOP_POP-UP LD_24121513.jpg",
"./images/benefit/HOP/BIN_HOP_POP-UP MD_24121303.jpg",
"./images/benefit/HOP/HAN_HOP_JYP SHOP PLATFORMver_24121205.jpg",
"./images/benefit/HOP/HAN_HOP_JYP SHOP_24121105.jpg",
"./images/benefit/HOP/HAN_HOP_POP-UP Album Purchase_24121405.jpg",
"./images/benefit/HOP/HAN_HOP_POP-UP LD_24121505.jpg",
"./images/benefit/HOP/HAN_HOP_POP-UP LD_24121515.jpg",
"./images/benefit/HOP/HAN_HOP_POP-UP MD_24121305.jpg",
"./images/benefit/HOP/HYUN_HOP_JYP SHOP PLATFORMver_24121204.jpg",
"./images/benefit/HOP/HYUN_HOP_JYP SHOP_24121104.jpg",
"./images/benefit/HOP/HYUN_HOP_POP-UP Album Purchase_24121404.jpg",
"./images/benefit/HOP/HYUN_HOP_POP-UP LD_24121504.jpg",
"./images/benefit/HOP/HYUN_HOP_POP-UP LD_24121514.jpg",
"./images/benefit/HOP/HYUN_HOP_POP-UP MD_24121304.jpg",
"./images/benefit/HOP/IN_HOP_JYP SHOP PLATFORMver_24121208.jpg",
"./images/benefit/HOP/IN_HOP_JYP SHOP_24121108.jpg",
"./images/benefit/HOP/IN_HOP_POP-UP Album Purchase_24121408.jpg",
"./images/benefit/HOP/IN_HOP_POP-UP LD_24121508.jpg",
"./images/benefit/HOP/IN_HOP_POP-UP LD_24121518.jpg",
"./images/benefit/HOP/IN_HOP_POP-UP MD_24121308.jpg",
"./images/benefit/HOP/KNOW_HOP_JYP SHOP PLATFORMver_24121202.jpg",
"./images/benefit/HOP/KNOW_HOP_JYP SHOP_24121102.jpg",
"./images/benefit/HOP/KNOW_HOP_POP-UP Album Purchase_24121402.jpg",
"./images/benefit/HOP/KNOW_HOP_POP-UP LD_24121502.jpg",
"./images/benefit/HOP/KNOW_HOP_POP-UP LD_24121512.jpg",
"./images/benefit/HOP/KNOW_HOP_POP-UP MD_24121302.jpg",
"./images/benefit/HOP/LIX_HOP_JYP SHOP PLATFORMver_24121206.jpg",
"./images/benefit/HOP/LIX_HOP_JYP SHOP_24121106.jpg",
"./images/benefit/HOP/LIX_HOP_POP-UP Album Purchase_24121406.jpg",
"./images/benefit/HOP/LIX_HOP_POP-UP LD_24121506.jpg",
"./images/benefit/HOP/LIX_HOP_POP-UP LD_24121516.jpg",
"./images/benefit/HOP/LIX_HOP_POP-UP MD_24121306.jpg",
"./images/benefit/HOP/MIN_HOP_JYP SHOP PLATFORMver_24121207.jpg",
"./images/benefit/HOP/MIN_HOP_JYP SHOP_24121107.jpg",
"./images/benefit/HOP/MIN_HOP_POP-UP Album Purchase_24121407.jpg",
"./images/benefit/HOP/MIN_HOP_POP-UP LD_24121507.jpg",
"./images/benefit/HOP/MIN_HOP_POP-UP LD_24121517.jpg",
"./images/benefit/HOP/MIN_HOP_POP-UP MD_24121307.jpg",

// === BENEFIT / SKZ 5'CLOCK ===
"./images/benefit/SKZ 5'CLOCK/BANG_SKZ 5'CLOCK_JYP SHOP MD_25020601.jpg",
"./images/benefit/SKZ 5'CLOCK/BANG_SKZ 5'CLOCK_OFFLINE MD_25020501.jpg",
"./images/benefit/SKZ 5'CLOCK/KNOW_SKZ 5'CLOCK_JYP SHOP MD_25020602.jpg",
"./images/benefit/SKZ 5'CLOCK/KNOW_SKZ 5'CLOCK_OFFLINE MD_25020502.jpg",
"./images/benefit/SKZ 5'CLOCK/BIN_SKZ 5'CLOCK_JYP SHOP MD_25020603.jpg",
"./images/benefit/SKZ 5'CLOCK/BIN_SKZ 5'CLOCK_OFFLINE MD_25020503.jpg",
"./images/benefit/SKZ 5'CLOCK/HYUN_SKZ 5'CLOCK_JYP SHOP MD_25020604.jpg",
"./images/benefit/SKZ 5'CLOCK/HYUN_SKZ 5'CLOCK_OFFLINE MD_25020504.jpg",
"./images/benefit/SKZ 5'CLOCK/HAN_SKZ 5'CLOCK_JYP SHOP MD_25020605.jpg",
"./images/benefit/SKZ 5'CLOCK/HAN_SKZ 5'CLOCK_OFFLINE MD_25020505.jpg",
"./images/benefit/SKZ 5'CLOCK/LIX_SKZ 5'CLOCK_JYP SHOP MD_25020606.jpg",
"./images/benefit/SKZ 5'CLOCK/LIX_SKZ 5'CLOCK_OFFLINE MD_25020506.jpg",
"./images/benefit/SKZ 5'CLOCK/MIN_SKZ 5'CLOCK_JYP SHOP MD_25020607.jpg",
"./images/benefit/SKZ 5'CLOCK/MIN_SKZ 5'CLOCK_OFFLINE MD_25020507.jpg",
"./images/benefit/SKZ 5'CLOCK/IN_SKZ 5'CLOCK_JYP SHOP MD_25020608.jpg",
"./images/benefit/SKZ 5'CLOCK/IN_SKZ 5'CLOCK_OFFLINE MD_25020508.jpg",

// === BENEFIT / SKZOO'S MAGIC SCHOOL in BUSAN ===
"./images/benefit/SKZOO'S MAGIC SCHOOL in BUSAN/BANG_SKZOO'S MAGIC SCHOOL in BUSAN_JYP SHOP_24050101.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL in BUSAN/KNOW_SKZOO'S MAGIC SCHOOL in BUSAN_JYP SHOP_24050102.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL in BUSAN/BIN_SKZOO'S MAGIC SCHOOL in BUSAN_JYP SHOP_24050103.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL in BUSAN/HYUN_SKZOO'S MAGIC SCHOOL in BUSAN_JYP SHOP_24050104.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL in BUSAN/HAN_SKZOO'S MAGIC SCHOOL in BUSAN_JYP SHOP_24050105.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL in BUSAN/LIX_SKZOO'S MAGIC SCHOOL in BUSAN_JYP SHOP_24050106.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL in BUSAN/MIN_SKZOO'S MAGIC SCHOOL in BUSAN_JYP SHOP_24050107.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL in BUSAN/IN_SKZOO'S MAGIC SCHOOL in BUSAN_JYP SHOP_24050108.jpg",

// === BENEFIT / SKZOO'S MAGIC SCHOOL ===
"./images/benefit/SKZOO'S MAGIC SCHOOL/BANG_SKZOO'S MAGIC SCHOOL_POP-UP MD_24030101.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL/KNOW_SKZOO'S MAGIC SCHOOL_POP-UP MD_24030102.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL/BIN_SKZOO'S MAGIC SCHOOL_POP-UP MD_24030103.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL/HYUN_SKZOO'S MAGIC SCHOOL_POP-UP MD_24030104.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL/HAN_SKZOO'S MAGIC SCHOOL_POP-UP MD_24030105.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL/LIX_SKZOO'S MAGIC SCHOOL_POP-UP MD_24030106.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL/MIN_SKZOO'S MAGIC SCHOOL_POP-UP MD_24030107.jpg",
"./images/benefit/SKZOO'S MAGIC SCHOOL/IN_SKZOO'S MAGIC SCHOOL_POP-UP MD_24030108.jpg",

// === BENEFIT / TAMAGOTCHI ===
"./images/benefit/TAMAGOTCHI/BANG_TAMAGOTCHI_FANS SHOP_25040101.jpg",
"./images/benefit/TAMAGOTCHI/KNOW_TAMAGOTCHI_FANS SHOP_25040102.jpg",
"./images/benefit/TAMAGOTCHI/BIN_TAMAGOTCHI_FANS SHOP_25040103.jpg",
"./images/benefit/TAMAGOTCHI/HYUN_TAMAGOTCHI_FANS SHOP_25040104.jpg",
"./images/benefit/TAMAGOTCHI/HAN_TAMAGOTCHI_FANS SHOP_25040105.jpg",
"./images/benefit/TAMAGOTCHI/LIX_TAMAGOTCHI_FANS SHOP_25040106.jpg",
"./images/benefit/TAMAGOTCHI/MIN_TAMAGOTCHI_FANS SHOP_25040107.jpg",
"./images/benefit/TAMAGOTCHI/IN_TAMAGOTCHI_FANS SHOP_25040108.jpg",

// === EVENT / dominATE ===
"./images/event/dominATE/BANG_dominATE_SSJ Mission_24080601.jpg",
"./images/event/dominATE/BANG_dominATE_SSJ Purchase_24080701.jpg",
"./images/event/dominATE/BANG_dominATE_SSJ Purchase_24080711.jpg",
"./images/event/dominATE/KNOW_dominATE_SSJ Mission_24080602.jpg",
"./images/event/dominATE/KNOW_dominATE_SSJ Purchase_24080702.jpg",
"./images/event/dominATE/KNOW_dominATE_SSJ Purchase_24080712.jpg",
"./images/event/dominATE/BIN_dominATE_SSJ Mission_24080603.jpg",
"./images/event/dominATE/BIN_dominATE_SSJ Purchase_24080703.jpg",
"./images/event/dominATE/BIN_dominATE_SSJ Purchase_24080713.jpg",
"./images/event/dominATE/HYUN_dominATE_SSJ Mission_24080604.jpg",
"./images/event/dominATE/HYUN_dominATE_SSJ Purchase_24080704.jpg",
"./images/event/dominATE/HYUN_dominATE_SSJ Purchase_24080714.jpg",
"./images/event/dominATE/HAN_dominATE_SSJ Mission_24080605.jpg",
"./images/event/dominATE/HAN_dominATE_SSJ Purchase_24080705.jpg",
"./images/event/dominATE/HAN_dominATE_SSJ Purchase_24080715.jpg",
"./images/event/dominATE/LIX_dominATE_SSJ Mission_24080606.jpg",
"./images/event/dominATE/LIX_dominATE_SSJ Purchase_24080706.jpg",
"./images/event/dominATE/LIX_dominATE_SSJ Purchase_24080716.jpg",
"./images/event/dominATE/MIN_dominATE_SSJ Mission_24080607.jpg",
"./images/event/dominATE/MIN_dominATE_SSJ Purchase_24080707.jpg",
"./images/event/dominATE/MIN_dominATE_SSJ Purchase_24080717.jpg",
"./images/event/dominATE/IN_dominATE_SSJ Mission_24080608.jpg",
"./images/event/dominATE/IN_dominATE_SSJ Purchase_24080708.jpg",
"./images/event/dominATE/IN_dominATE_SSJ Purchase_24080718.jpg",
"./images/event/dominATE/SKZ_dominATE_SSJ Download_24080500.jpg",

// === EVENT / SKZ 5'CLOCK ===
"./images/event/SKZ 5'CLOCK/BANG_SKZ 5'CLOCK_SSJ MISSION_25020301.jpg",
"./images/event/SKZ 5'CLOCK/BANG_SKZ 5'CLOCK_SSJ PURCHASE_25020401.jpg",
"./images/event/SKZ 5'CLOCK/KNOW_SKZ 5'CLOCK_SSJ MISSION_25020302.jpg",
"./images/event/SKZ 5'CLOCK/KNOW_SKZ 5'CLOCK_SSJ PURCHASE_25020402.jpg",
"./images/event/SKZ 5'CLOCK/BIN_SKZ 5'CLOCK_SSJ MISSION_25020303.jpg",
"./images/event/SKZ 5'CLOCK/BIN_SKZ 5'CLOCK_SSJ PURCHASE_25020403.jpg",
"./images/event/SKZ 5'CLOCK/HYUN_SKZ 5'CLOCK_SSJ MISSION_25020304.jpg",
"./images/event/SKZ 5'CLOCK/HYUN_SKZ 5'CLOCK_SSJ PURCHASE_25020404.jpg",
"./images/event/SKZ 5'CLOCK/HAN_SKZ 5'CLOCK_SSJ MISSION_25020305.jpg",
"./images/event/SKZ 5'CLOCK/HAN_SKZ 5'CLOCK_SSJ PURCHASE_25020405.jpg",
"./images/event/SKZ 5'CLOCK/LIX_SKZ 5'CLOCK_SSJ MISSION_25020306.jpg",
"./images/event/SKZ 5'CLOCK/LIX_SKZ 5'CLOCK_SSJ PURCHASE_25020406.jpg",
"./images/event/SKZ 5'CLOCK/MIN_SKZ 5'CLOCK_SSJ MISSION_25020307.jpg",
"./images/event/SKZ 5'CLOCK/MIN_SKZ 5'CLOCK_SSJ PURCHASE_25020407.jpg",
"./images/event/SKZ 5'CLOCK/IN_SKZ 5'CLOCK_SSJ MISSION_25020308.jpg",
"./images/event/SKZ 5'CLOCK/IN_SKZ 5'CLOCK_SSJ PURCHASE_25020408.jpg",

// === EVENT / SKZ'S MAGIC SCHOOL ===
"./images/event/SKZ'S MAGIC SCHOOL/BANG_SKZ'S MAGIC SCHOOL_SSJ Mission_24030701.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/BANG_SKZ'S MAGIC SCHOOL_SSJ Play_24030601.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/BANG_SKZ'S MAGIC SCHOOL_SSJ purchase_24030801.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/KNOW_SKZ'S MAGIC SCHOOL_SSJ Mission_24030702.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/KNOW_SKZ'S MAGIC SCHOOL_SSJ Play_24030602.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/KNOW_SKZ'S MAGIC SCHOOL_SSJ purchase_24030802.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/BIN_SKZ'S MAGIC SCHOOL_SSJ Mission_24030703.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/BIN_SKZ'S MAGIC SCHOOL_SSJ Play_24030603.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/BIN_SKZ'S MAGIC SCHOOL_SSJ purchase_24030803.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/HYUN_SKZ'S MAGIC SCHOOL_SSJ Mission_24030704.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/HYUN_SKZ'S MAGIC SCHOOL_SSJ Play_24030604.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/HYUN_SKZ'S MAGIC SCHOOL_SSJ purchase_24030804.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/HAN_SKZ'S MAGIC SCHOOL_SSJ Mission_24030705.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/HAN_SKZ'S MAGIC SCHOOL_SSJ Play_24030605.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/HAN_SKZ'S MAGIC SCHOOL_SSJ purchase_24030805.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/LIX_SKZ'S MAGIC SCHOOL_SSJ Mission_24030706.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/LIX_SKZ'S MAGIC SCHOOL_SSJ Play_24030606.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/LIX_SKZ'S MAGIC SCHOOL_SSJ purchase_24030806.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/MIN_SKZ'S MAGIC SCHOOL_SSJ Mission_24030707.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/MIN_SKZ'S MAGIC SCHOOL_SSJ Play_24030607.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/MIN_SKZ'S MAGIC SCHOOL_SSJ purchase_24030807.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/IN_SKZ'S MAGIC SCHOOL_SSJ Mission_24030708.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/IN_SKZ'S MAGIC SCHOOL_SSJ Play_24030608.jpg",
"./images/event/SKZ'S MAGIC SCHOOL/IN_SKZ'S MAGIC SCHOOL_SSJ purchase_24030808.jpg",

// === EVENT / SLBS ===
"./images/event/SLBS/BANG_SLBS_Collectable Card_24010301.jpg",
"./images/event/SLBS/BANG_SLBS_Giveaway_24010401.jpg",
"./images/event/SLBS/KNOW_SLBS_Collectable Card_24010302.jpg",
"./images/event/SLBS/KNOW_SLBS_Giveaway_24010402.jpg",
"./images/event/SLBS/BIN_SLBS_Collectable Card_24010303.jpg",
"./images/event/SLBS/BIN_SLBS_Giveaway_24010403.jpg",
"./images/event/SLBS/HYUN_SLBS_Collectable Card_24010304.jpg",
"./images/event/SLBS/HYUN_SLBS_Giveaway_24010404.jpg",
"./images/event/SLBS/HAN_SLBS_Collectable Card_24010305.jpg",
"./images/event/SLBS/HAN_SLBS_Giveaway_24010405.jpg",
"./images/event/SLBS/LIX_SLBS_Collectable Card_24010306.jpg",
"./images/event/SLBS/LIX_SLBS_Giveaway_24010406.jpg",
"./images/event/SLBS/MIN_SLBS_Collectable Card_24010307.jpg",
"./images/event/SLBS/MIN_SLBS_Giveaway_24010407.jpg",
"./images/event/SLBS/IN_SLBS_Collectable Card_24010308.jpg",
"./images/event/SLBS/IN_SLBS_Giveaway_24010408.jpg",

// === MD / 2025 SG ===
"./images/md/2025 SG/BANG_2025 SG_Photocard_24121601.jpg",
"./images/md/2025 SG/KNOW_2025 SG_Photocard_24121602.jpg",
"./images/md/2025 SG/BIN_2025 SG_Photocard_24121603.jpg",
"./images/md/2025 SG/HYUN_2025 SG_Photocard_24121604.jpg",
"./images/md/2025 SG/HAN_2025 SG_Photocard_24121605.jpg",
"./images/md/2025 SG/LIX_2025 SG_Photocard_24121606.jpg",
"./images/md/2025 SG/MIN_2025 SG_Photocard_24121607.jpg",
"./images/md/2025 SG/IN_2025 SG_Photocard_24121608.jpg",

// === MD / 2026 SG ===
"./images/md/2026 SG/BANG_2026SG_Photocard_25120101.jpg",
"./images/md/2026 SG/BANG_2026SG_Polaroid_25120201.jpg",
"./images/md/2026 SG/KNOW_2026SG_Photocard_25120102.jpg",
"./images/md/2026 SG/KNOW_2026SG_Polaroid_25120202.jpg",
"./images/md/2026 SG/BIN_2026SG_Photocard_25120103.jpg",
"./images/md/2026 SG/BIN_2026SG_Polaroid_25120203.jpg",
"./images/md/2026 SG/HYUN_2026SG_Photocard_25120104.jpg",
"./images/md/2026 SG/HYUN_2026SG_Polaroid_25120204.jpg",
"./images/md/2026 SG/HAN_2026SG_Photocard_25120105.jpg",
"./images/md/2026 SG/HAN_2026SG_Polaroid_25120205.jpg",
"./images/md/2026 SG/LIX_2026SG_Photocard_25120106.jpg",
"./images/md/2026 SG/LIX_2026SG_Polaroid_25120206.jpg",
"./images/md/2026 SG/MIN_2026SG_Photocard_25120107.jpg",
"./images/md/2026 SG/MIN_2026SG_Polaroid_25120207.jpg",
"./images/md/2026 SG/IN_2026SG_Photocard_25120108.jpg",
"./images/md/2026 SG/IN_2026SG_Polaroid_25120208.jpg",

// === MD / ATE === 
"./images/md/ATE/BANG_ATE_Binder_24071701.jpg",
"./images/md/ATE/KNOW_ATE_Binder_24071702.jpg",
"./images/md/ATE/BIN_ATE_Binder_24071703.jpg",
"./images/md/ATE/HYUN_ATE_Binder_24071704.jpg",
"./images/md/ATE/HAN_ATE_Binder_24071705.jpg",
"./images/md/ATE/LIX_ATE_Binder_24071706.jpg",
"./images/md/ATE/MIN_ATE_Binder_24071707.jpg",
"./images/md/ATE/IN_ATE_Binder_24071708.jpg",

// === MD / celebrATE ===
"./images/md/celebrATE/HYUN_celebrATE_NECKLACE by Hyunjin_25100504.jpg",

// === MD / SKZ 5'CLOCK ===
"./images/md/SKZ 5'CLOCK/BANG_SKZ 5'CLOCK_ACRYLIC STAND_25020701.jpg",
"./images/md/SKZ 5'CLOCK/BANG_SKZ 5'CLOCK_BOX TAPE_25020901.jpg",
"./images/md/SKZ 5'CLOCK/BANG_SKZ 5'CLOCK_TINCASE POLAROID_25020801.jpg",
"./images/md/SKZ 5'CLOCK/BANG_SKZ 5'CLOCK_TINCASE POLAROID_25020811.jpg",
"./images/md/SKZ 5'CLOCK/KNOW_SKZ 5'CLOCK_ACRYLIC STAND_25020702.jpg",
"./images/md/SKZ 5'CLOCK/KNOW_SKZ 5'CLOCK_BOX TAPE_25020902.jpg",
"./images/md/SKZ 5'CLOCK/KNOW_SKZ 5'CLOCK_TINCASE POLAROID_25020802.jpg",
"./images/md/SKZ 5'CLOCK/KNOW_SKZ 5'CLOCK_TINCASE POLAROID_25020812.jpg",
"./images/md/SKZ 5'CLOCK/BIN_SKZ 5'CLOCK_ACRYLIC STAND_25020703.jpg",
"./images/md/SKZ 5'CLOCK/BIN_SKZ 5'CLOCK_BOX TAPE_25020903.jpg",
"./images/md/SKZ 5'CLOCK/BIN_SKZ 5'CLOCK_TINCASE POLAROID_25020803.jpg",
"./images/md/SKZ 5'CLOCK/BIN_SKZ 5'CLOCK_TINCASE POLAROID_25020813.jpg",
"./images/md/SKZ 5'CLOCK/HYUN_SKZ 5'CLOCK_ACRYLIC STAND_25020704.jpg",
"./images/md/SKZ 5'CLOCK/HYUN_SKZ 5'CLOCK_BOX TAPE_25020904.jpg",
"./images/md/SKZ 5'CLOCK/HYUN_SKZ 5'CLOCK_TINCASE POLAROID_25020804.jpg",
"./images/md/SKZ 5'CLOCK/HYUN_SKZ 5'CLOCK_TINCASE POLAROID_25020814.jpg",
"./images/md/SKZ 5'CLOCK/HAN_SKZ 5'CLOCK_ACRYLIC STAND_25020705.jpg",
"./images/md/SKZ 5'CLOCK/HAN_SKZ 5'CLOCK_BOX TAPE_25020905.jpg",
"./images/md/SKZ 5'CLOCK/HAN_SKZ 5'CLOCK_TINCASE POLAROID_25020805.jpg",
"./images/md/SKZ 5'CLOCK/HAN_SKZ 5'CLOCK_TINCASE POLAROID_25020815.jpg",
"./images/md/SKZ 5'CLOCK/LIX_SKZ 5'CLOCK_ACRYLIC STAND_25020706.jpg",
"./images/md/SKZ 5'CLOCK/LIX_SKZ 5'CLOCK_BOX TAPE_25020906.jpg",
"./images/md/SKZ 5'CLOCK/LIX_SKZ 5'CLOCK_TINCASE POLAROID_25020806.jpg",
"./images/md/SKZ 5'CLOCK/LIX_SKZ 5'CLOCK_TINCASE POLAROID_25020816.jpg",
"./images/md/SKZ 5'CLOCK/MIN_SKZ 5'CLOCK_ACRYLIC STAND_25020707.jpg",
"./images/md/SKZ 5'CLOCK/MIN_SKZ 5'CLOCK_BOX TAPE_25020907.jpg",
"./images/md/SKZ 5'CLOCK/MIN_SKZ 5'CLOCK_TINCASE POLAROID_25020807.jpg",
"./images/md/SKZ 5'CLOCK/MIN_SKZ 5'CLOCK_TINCASE POLAROID_25020817.jpg",
"./images/md/SKZ 5'CLOCK/IN_SKZ 5'CLOCK_ACRYLIC STAND_25020708.jpg",
"./images/md/SKZ 5'CLOCK/IN_SKZ 5'CLOCK_BOX TAPE_25020908.jpg",
"./images/md/SKZ 5'CLOCK/IN_SKZ 5'CLOCK_TINCASE POLAROID_25020808.jpg",
"./images/md/SKZ 5'CLOCK/IN_SKZ 5'CLOCK_TINCASE POLAROID_25020818.jpg",
"./images/md/SKZ 5'CLOCK/SKZ_SKZ 5'CLOCK_TINCASE POLAROID_25020800.jpg",

// === MD / SKZOO'S MAGIC SCHOOL in BUSAN ===
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/BANG_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Carrier_24050501.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/BANG_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Chair_24050301.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/BANG_SKZOO'S MAGIC SCHOOL in BUSAN_Mini Tube_24050401.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/BANG_SKZOO'S MAGIC SCHOOL in BUSAN_Phone Tap_24050201.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/KNOW_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Carrier_24050502.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/KNOW_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Chair_24050302.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/KNOW_SKZOO'S MAGIC SCHOOL in BUSAN_Mini Tube_24050402.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/KNOW_SKZOO'S MAGIC SCHOOL in BUSAN_Phone Tap_24050202.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/BIN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Carrier_24050503.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/BIN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Chair_24050303.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/BIN_SKZOO'S MAGIC SCHOOL in BUSAN_Mini Tube_24050403.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/BIN_SKZOO'S MAGIC SCHOOL in BUSAN_Phone Tap_24050203.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/HYUN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Carrier_24050504.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/HYUN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Chair_24050304.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/HYUN_SKZOO'S MAGIC SCHOOL in BUSAN_Mini Tube_24050404.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/HYUN_SKZOO'S MAGIC SCHOOL in BUSAN_Phone Tap_24050204.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/HAN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Carrier_24050505.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/HAN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Chair_24050305.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/HAN_SKZOO'S MAGIC SCHOOL in BUSAN_Mini Tube_24050405.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/HAN_SKZOO'S MAGIC SCHOOL in BUSAN_Phone Tap_24050205.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/LIX_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Carrier_24050506.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/LIX_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Chair_24050306.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/LIX_SKZOO'S MAGIC SCHOOL in BUSAN_Mini Tube_24050406.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/LIX_SKZOO'S MAGIC SCHOOL in BUSAN_Phone Tap_24050206.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/MIN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Carrier_24050507.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/MIN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Chair_24050307.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/MIN_SKZOO'S MAGIC SCHOOL in BUSAN_Mini Tube_24050407.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/MIN_SKZOO'S MAGIC SCHOOL in BUSAN_Phone Tap_24050207.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/IN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Carrier_24050508.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/IN_SKZOO'S MAGIC SCHOOL in BUSAN_10cm Chair_24050308.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/IN_SKZOO'S MAGIC SCHOOL in BUSAN_Mini Tube_24050408.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL in BUSAN/IN_SKZOO'S MAGIC SCHOOL in BUSAN_Phone Tap_24050208.jpg",

// === MD / SKZOO'S MAGIC SCHOOL ===
"./images/md/SKZOO'S MAGIC SCHOOL/BANG_SKZOO'S MAGIC SCHOOL_BOX TAPE_24030201.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/KNOW_SKZOO'S MAGIC SCHOOL_BOX TAPE_24030202.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/KNOW_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030303.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/KNOW_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030304.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/BIN_SKZOO'S MAGIC SCHOOL_BOX TAPE_24030203.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/BIN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030305.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/BIN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030306.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/HYUN_SKZOO'S MAGIC SCHOOL_BOX TAPE_24030204.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/HYUN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030307.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/HYUN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030308.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/HAN_SKZOO'S MAGIC SCHOOL_BOX TAPE_24030205.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/HAN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030309.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/HAN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030310.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/LIX_SKZOO'S MAGIC SCHOOL_BOX TAPE_24030206.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/LIX_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030311.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/LIX_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030312.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/MIN_SKZOO'S MAGIC SCHOOL_BOX TAPE_24030207.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/MIN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030313.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/MIN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030314.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/IN_SKZOO'S MAGIC SCHOOL_BOX TAPE_24030208.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/IN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030315.jpg",
"./images/md/SKZOO'S MAGIC SCHOOL/IN_SKZOO'S MAGIC SCHOOL_PHOTO DECO SET_24030316.jpg",

// === STAY / ATE ===
"./images/STAY/ATE/BANG_ATE_Broadcast 1st_24071401.jpg",
"./images/STAY/ATE/KNOW_ATE_Broadcast 1st_24071402.jpg",
"./images/STAY/ATE/BIN_ATE_Broadcast 1st_24071403.jpg",
"./images/STAY/ATE/HYUN_ATE_Broadcast 1st_24071404.jpg",
"./images/STAY/ATE/HAN_ATE_Broadcast 1st_24071405.jpg",
"./images/STAY/ATE/LIX_ATE_Broadcast 1st_24071406.jpg",
"./images/STAY/ATE/MIN_ATE_Broadcast 1st_24071407.jpg",
"./images/STAY/ATE/IN_ATE_Broadcast 1st_24071408.jpg",

// === STAY / celebrATE ===
"./images/STAY/celebrATE/BANG_celebrATE_STAY ZONE DAY1_25100101.jpg",
"./images/STAY/celebrATE/BANG_celebrATE_STAY ZONE DAY2_25100201.jpg",
"./images/STAY/celebrATE/KNOW_celebrATE_STAY ZONE DAY1_25100102.jpg",
"./images/STAY/celebrATE/KNOW_celebrATE_STAY ZONE DAY2_25100202.jpg",
"./images/STAY/celebrATE/BIN_celebrATE_STAY ZONE DAY1_25100103.jpg",
"./images/STAY/celebrATE/BIN_celebrATE_STAY ZONE DAY2_25100203.jpg",
"./images/STAY/celebrATE/HYUN_celebrATE_STAY ZONE DAY1_25100104.jpg",
"./images/STAY/celebrATE/HYUN_celebrATE_STAY ZONE DAY2_25100204.jpg",
"./images/STAY/celebrATE/HAN_celebrATE_STAY ZONE DAY1_25100105.jpg",
"./images/STAY/celebrATE/HAN_celebrATE_STAY ZONE DAY2_25100205.jpg",
"./images/STAY/celebrATE/LIX_celebrATE_STAY ZONE DAY1_25100106.jpg",
"./images/STAY/celebrATE/LIX_celebrATE_STAY ZONE DAY2_25100206.jpg",
"./images/STAY/celebrATE/MIN_celebrATE_STAY ZONE DAY1_25100107.jpg",
"./images/STAY/celebrATE/MIN_celebrATE_STAY ZONE DAY2_25100207.jpg",
"./images/STAY/celebrATE/IN_celebrATE_STAY ZONE DAY1_25100108.jpg",
"./images/STAY/celebrATE/IN_celebrATE_STAY ZONE DAY2_25100208.jpg",

// === STAY / dominATE ===
"./images/STAY/dominATE/BANG_dominATE_STAY ZONE Day1_24080101.jpg",
"./images/STAY/dominATE/BANG_dominATE_STAY ZONE Day3_24080301.jpg",
"./images/STAY/dominATE/BANG_dominATE_STAY ZONE Day4_24080401.jpg",
"./images/STAY/dominATE/KNOW_dominATE_STAY ZONE Day1_24080102.jpg",
"./images/STAY/dominATE/KNOW_dominATE_STAY ZONE Day3_24080302.jpg",
"./images/STAY/dominATE/KNOW_dominATE_STAY ZONE Day4_24080402.jpg",
"./images/STAY/dominATE/BIN_dominATE_STAY ZONE Day1_24080103.jpg",
"./images/STAY/dominATE/BIN_dominATE_STAY ZONE Day3_24080303.jpg",
"./images/STAY/dominATE/BIN_dominATE_STAY ZONE Day4_24080403.jpg",
"./images/STAY/dominATE/HYUN_dominATE_STAY ZONE Day1_24080104.jpg",
"./images/STAY/dominATE/HYUN_dominATE_STAY ZONE Day3_24080304.jpg",
"./images/STAY/dominATE/HYUN_dominATE_STAY ZONE Day4_24080404.jpg",
"./images/STAY/dominATE/HAN_dominATE_STAY ZONE Day1_24080105.jpg",
"./images/STAY/dominATE/HAN_dominATE_STAY ZONE Day3_24080305.jpg",
"./images/STAY/dominATE/HAN_dominATE_STAY ZONE Day4_24080405.jpg",
"./images/STAY/dominATE/LIX_dominATE_STAY ZONE Day1_24080106.jpg",
"./images/STAY/dominATE/LIX_dominATE_STAY ZONE Day3_24080306.jpg",
"./images/STAY/dominATE/LIX_dominATE_STAY ZONE Day4_24080406.jpg",
"./images/STAY/dominATE/MIN_dominATE_STAY ZONE Day1_24080107.jpg",
"./images/STAY/dominATE/MIN_dominATE_STAY ZONE Day3_24080307.jpg",
"./images/STAY/dominATE/MIN_dominATE_STAY ZONE Day4_24080407.jpg",
"./images/STAY/dominATE/IN_dominATE_STAY ZONE Day1_24080108.jpg",
"./images/STAY/dominATE/IN_dominATE_STAY ZONE Day3_24080308.jpg",
"./images/STAY/dominATE/IN_dominATE_STAY ZONE Day4_24080408.jpg",
"./images/STAY/dominATE/SKZ_dominATE_STAY ZONE Day2_24080209.jpg",
"./images/STAY/dominATE/SKZ_dominATE_STAY ZONE Day2_24080210.jpg",
"./images/STAY/dominATE/SKZ_dominATE_STAY ZONE Day2_24080211.jpg",
"./images/STAY/dominATE/SKZ_dominATE_STAY ZONE Day2_24080212.jpg",

// === STAY / SKZ 5'CLOCK ===
"./images/STAY/SKZ 5'CLOCK/BANG_SKZ 5'CLOCK_STAY ZONE DAY3_25020201.jpg",
"./images/STAY/SKZ 5'CLOCK/KNOW_SKZ 5'CLOCK_STAY ZONE DAY3_25020202.jpg",
"./images/STAY/SKZ 5'CLOCK/BIN_SKZ 5'CLOCK_STAY ZONE DAY3_25020203.jpg",
"./images/STAY/SKZ 5'CLOCK/HYUN_SKZ 5'CLOCK_STAY ZONE DAY3_25020204.jpg",
"./images/STAY/SKZ 5'CLOCK/HAN_SKZ 5'CLOCK_STAY ZONE DAY3_25020205.jpg",
"./images/STAY/SKZ 5'CLOCK/LIX_SKZ 5'CLOCK_STAY ZONE DAY3_25020206.jpg",
"./images/STAY/SKZ 5'CLOCK/MIN_SKZ 5'CLOCK_STAY ZONE DAY3_25020207.jpg",
"./images/STAY/SKZ 5'CLOCK/IN_SKZ 5'CLOCK_STAY ZONE DAY3_25020208.jpg",
"./images/STAY/SKZ 5'CLOCK/SKZ_SKZ 5'CLOCK_STAY ZONE DAY1_25020109.jpg",
"./images/STAY/SKZ 5'CLOCK/SKZ_SKZ 5'CLOCK_STAY ZONE DAY1_25020110.jpg",
"./images/STAY/SKZ 5'CLOCK/SKZ_SKZ 5'CLOCK_STAY ZONE DAY1_25020111.jpg",
"./images/STAY/SKZ 5'CLOCK/SKZ_SKZ 5'CLOCK_STAY ZONE DAY1_25020112.jpg",

// === STAY / SKZ'S MAGIC SCHOOL ===
"./images/STAY/SKZ'S MAGIC SCHOOL/BANG_SKZ'S MAGIC SCHOOL_STAY ZONE Day2_24030401.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/BANG_SKZ'S MAGIC SCHOOL_STAY ZONE ID Card_24030501.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/KNOW_SKZ'S MAGIC SCHOOL_STAY ZONE Day2_24030402.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/KNOW_SKZ'S MAGIC SCHOOL_STAY ZONE ID Card_24030502.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/BIN_SKZ'S MAGIC SCHOOL_STAY ZONE Day2_24030403.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/BIN_SKZ'S MAGIC SCHOOL_STAY ZONE ID Card_24030503.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/HYUN_SKZ'S MAGIC SCHOOL_STAY ZONE Day2_24030404.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/HYUN_SKZ'S MAGIC SCHOOL_STAY ZONE ID Card_24030504.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/HAN_SKZ'S MAGIC SCHOOL_STAY ZONE Day2_24030405.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/HAN_SKZ'S MAGIC SCHOOL_STAY ZONE ID Card_24030505.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/LIX_SKZ'S MAGIC SCHOOL_STAY ZONE Day2_24030406.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/LIX_SKZ'S MAGIC SCHOOL_STAY ZONE ID Card_24030506.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/MIN_SKZ'S MAGIC SCHOOL_STAY ZONE Day2_24030407.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/MIN_SKZ'S MAGIC SCHOOL_STAY ZONE ID Card_24030507.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/IN_SKZ'S MAGIC SCHOOL_STAY ZONE Day2_24030408.jpg",
"./images/STAY/SKZ'S MAGIC SCHOOL/IN_SKZ'S MAGIC SCHOOL_STAY ZONE ID Card_24030508.jpg",

// === STAY / STAY 4th ===
"./images/STAY/STAY 4th/BANG_STAY 4th_Photocard_24010101.jpg",
"./images/STAY/STAY 4th/KNOW_STAY 4th_Photocard_24010102.jpg",
"./images/STAY/STAY 4th/BIN_STAY 4th_Photocard_24010103.jpg",
"./images/STAY/STAY 4th/HYUN_STAY 4th_Photocard_24010104.jpg",
"./images/STAY/STAY 4th/HAN_STAY 4th_Photocard_24010105.jpg",
"./images/STAY/STAY 4th/LIX_STAY 4th_Photocard_24010106.jpg",
"./images/STAY/STAY 4th/MIN_STAY 4th_Photocard_24010107.jpg",
"./images/STAY/STAY 4th/IN_STAY 4th_Photocard_24010108.jpg",
"./images/STAY/STAY 4th/SKZ_STAY 4th_UNIT_24010209.jpg",
"./images/STAY/STAY 4th/SKZ_STAY 4th_UNIT_24010210.jpg",
"./images/STAY/STAY 4th/SKZ_STAY 4th_UNIT_24010211.jpg",
"./images/STAY/STAY 4th/SKZ_STAY 4th_UNIT_24010212.jpg",
"./images/STAY/STAY 4th/SKZ_STAY 4th_UNIT_24010213.jpg",
"./images/STAY/STAY 4th/SKZ_STAY 4th_UNIT_24010214.jpg",
"./images/STAY/STAY 4th/SKZ_STAY 4th_UNIT_24010215.jpg",
"./images/STAY/STAY 4th/SKZ_STAY 4th_UNIT_24010216.jpg",

// === STAY / STAY 5th ===
"./images/STAY/STAY 5th/BANG_STAY 5th_PHOTOCARD_25010101.jpg",
"./images/STAY/STAY 5th/BANG_STAY 5th_PHOTOCARD_25010111.jpg",
"./images/STAY/STAY 5th/KNOW_STAY 5th_PHOTOCARD_25010102.jpg",
"./images/STAY/STAY 5th/KNOW_STAY 5th_PHOTOCARD_25010112.jpg",
"./images/STAY/STAY 5th/BIN_STAY 5th_PHOTOCARD_25010103.jpg",
"./images/STAY/STAY 5th/BIN_STAY 5th_PHOTOCARD_25010113.jpg",
"./images/STAY/STAY 5th/HYUN_STAY 5th_PHOTOCARD_25010104.jpg",
"./images/STAY/STAY 5th/HYUN_STAY 5th_PHOTOCARD_25010114.jpg",
"./images/STAY/STAY 5th/HAN_STAY 5th_PHOTOCARD_25010105.jpg",
"./images/STAY/STAY 5th/HAN_STAY 5th_PHOTOCARD_25010115.jpg",
"./images/STAY/STAY 5th/LIX_STAY 5th_PHOTOCARD_25010106.jpg",
"./images/STAY/STAY 5th/LIX_STAY 5th_PHOTOCARD_25010116.jpg",
"./images/STAY/STAY 5th/MIN_STAY 5th_PHOTOCARD_25010107.jpg",
"./images/STAY/STAY 5th/MIN_STAY 5th_PHOTOCARD_25010117.jpg",
"./images/STAY/STAY 5th/IN_STAY 5th_PHOTOCARD_25010108.jpg",
"./images/STAY/STAY 5th/IN_STAY 5th_PHOTOCARD_25010118.jpg",

];

// 3. 데이터 가공 (pocaData 생성)
const pocaData = rawPaths.map(path => {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const fileNameParts = fileName.split('_');
    const category = pathParts[2] || "album";
    const albumName = pathParts[3] || "ALBUM";
    let unicodePart = fileNameParts[fileNameParts.length - 1] ? fileNameParts[fileNameParts.length - 1].split('.')[0].replace(/[^0-9]/g, "") : "0";

    return {
        member: memberMap[fileNameParts[0]] || "기타",
        album: albumName,
        version: fileNameParts[2] || "",
        unicode: unicodePart,
        category: category,
        img: path
    };
}).sort((a, b) => parseInt(b.unicode) - parseInt(a.unicode));

// 4. 화면에 포카 목록을 그리는 함수
function render(filterMember = "전체") {
    const gridContainer = document.getElementById('poca-container') || document.getElementById('pcGrid');
    const searchInput = document.getElementById('search-input');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = '';
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";

    let filtered = pocaData.filter(p => {
        const matchesMember = (filterMember === "전체" || p.member === filterMember);
        const matchesSearch = p.album.toLowerCase().includes(searchTerm) || 
                              p.version.toLowerCase().includes(searchTerm);
        return matchesMember && matchesSearch;
    });

    if (!isGroupedView) {
        gridContainer.className = 'grid'; 
        filtered.forEach(poca => gridContainer.appendChild(createCard(poca)));
    } else {
        gridContainer.className = 'list-mode-active'; 
        const groups = {};
        filtered.forEach(p => {
            const key = `${p.album} | ${p.version}`;
            if (!groups[key]) groups[key] = [];
            groups[key].push(p);
        });

        for (const [title, pocast] of Object.entries(groups)) {
            const section = document.createElement('div');
            section.className = 'group-section';
            section.innerHTML = `<div class="group-title">${title}</div>`;
            const subGrid = document.createElement('div');
            subGrid.className = 'grid';
            
            pocast.sort((a, b) => {
                let indexA = memberOrder.indexOf(a.member);
                let indexB = memberOrder.indexOf(b.member);
                if (indexA === -1) indexA = 99;
                if (indexB === -1) indexB = 99;
                return indexA - indexB;
            });

            pocast.forEach(poca => subGrid.appendChild(createCard(poca)));
            section.appendChild(subGrid);
            gridContainer.appendChild(section);
        }
    }
    updateCounter(filterMember, searchTerm); 
}

// 5. 카드 한 장 만드는 함수
function createCard(poca) {
    const card = document.createElement('div');
    card.className = 'poca-card';
    if (localStorage.getItem(poca.unicode) === 'true') card.classList.add('collected');
    
    const safeImgPath = encodeURI(poca.img);
    
    card.innerHTML = `
        <img src="${safeImgPath}">
        <div class="poca-label">${poca.category.toLowerCase()}</div>
    `;
    
    card.onclick = (e) => {
        card.classList.toggle('collected');
        localStorage.setItem(poca.unicode, card.classList.contains('collected'));
        const activeBtn = document.querySelector('#filter-members .active');
        updateCounter(activeBtn ? activeBtn.innerText : "전체");
    };

    card.oncontextmenu = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        const modal = document.getElementById('info-modal');
        const modalImg = document.getElementById('modal-img');
        const modalInfo = document.getElementById('modal-info');

        if (modal) {
            modalImg.src = safeImgPath;
            modalInfo.innerHTML = `
                <div style="line-height: 1.5; text-align: left; padding: 0 10px;">
                    <strong style="color: #333; font-size: 1.1em;">${poca.album}</strong><br>
                    <span style="color: #666; font-size: 0.9em;">${poca.version}</span><br>
                    <small style="color: #ccc; display: block; margin-top: 5px;">#${poca.unicode}</small>
                </div>`;
            modal.style.display = 'flex';
        }
    };

    return card;
}

// 6. 페이지 로드 시 초기화 및 모든 버튼 설정
document.addEventListener('DOMContentLoaded', () => {
    render();
    
    const viewBtn = document.getElementById('view-mode-btn');
    if(viewBtn) {
        viewBtn.onclick = function() {
            isGroupedView = !isGroupedView;
            this.innerText = isGroupedView ? "전체" : "리스트"; 
            const activeBtn = document.querySelector('#filter-members .active');
            render(activeBtn ? activeBtn.innerText : "전체");
        };
    }

    document.querySelectorAll('#filter-members .filter-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('#filter-members .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            render(btn.innerText);
        };
    });

    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.onclick = () => {
            if (confirm("모든 수집 데이터를 초기화할까요?")) {
                pocaData.forEach(p => localStorage.removeItem(p.unicode));
                location.reload();
            }
        };
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.oninput = () => {
            const activeBtn = document.querySelector('#filter-members .filter-btn.active');
            const currentMember = activeBtn ? activeBtn.innerText : "전체";
            render(currentMember);
        };
    }

    const exportBtn = document.getElementById('export-btn');
    if (exportBtn) {
        exportBtn.onclick = () => {
            const collectedIds = pocaData
                .filter(p => localStorage.getItem(p.unicode) === 'true')
                .map(p => p.unicode);
            
            if (collectedIds.length === 0) {
                alert("체크된 포카가 하나도 없어서 백업할 데이터가 없어요!");
                return;
            }

            const dataString = btoa(encodeURIComponent(JSON.stringify(collectedIds)));
            const textArea = document.createElement("textarea");
            document.body.appendChild(textArea);
            textArea.value = dataString;
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert("백업 코드가 복사되었습니다!");
        };
    }

    const importBtn = document.getElementById('import-btn');
    if (importBtn) {
        importBtn.onclick = () => {
            const code = prompt("백업 코드를 입력해주세요.");
            if (!code) return;

            try {
                const decodedIds = JSON.parse(decodeURIComponent(atob(code)));
                if (confirm(`${decodedIds.length}개의 데이터를 불러올까요?`)) {
                    pocaData.forEach(p => localStorage.removeItem(p.unicode));
                    decodedIds.forEach(id => localStorage.setItem(id, 'true'));
                    location.reload();
                }
            } catch (e) {
                alert("코드가 올바르지 않습니다.");
            }
        };
    }

    // [최종 수정] 정보창 닫기: 클릭 전파를 막아 뒤의 포카가 클릭되지 않게 함
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            modal.style.display = 'none';
            e.stopPropagation(); // ★ 뒤의 포카 클릭 방지
        }, true); // ★ 우선순위 높임
    }
});

// 7. 카운터 업데이트 함수
function updateCounter(member = "전체", searchTerm = "") {
    const filtered = pocaData.filter(p => {
        const matchesMember = (member === "전체" || p.member === member);
        const matchesSearch = p.album.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              p.version.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesMember && matchesSearch;
    });

    const collected = filtered.filter(p => localStorage.getItem(p.unicode) === 'true').length;
    
    if(document.getElementById('collect-count')) document.getElementById('collect-count').innerText = collected;
    if(document.getElementById('total-count')) document.getElementById('total-count').innerText = filtered.length;
}