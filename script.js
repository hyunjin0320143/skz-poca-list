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

  // === ALBUM / HOP ===
  "./images/album/HOP/BANG_HOP_ACCORDIONver MONOCHROME_24120801.jpg",
  "./images/album/HOP/BANG_HOP_ACCORDIONver PHOTOCARD_24120701.jpg",
  "./images/album/HOP/BANG_HOP_ACCORDIONver POB_24120901.jpg",
  "./images/album/HOP/BANG_HOP_HIPTAPEver PHOTOCARD_24120101.jpg",
  "./images/album/HOP/BANG_HOP_HIPTAPEver TRADING A_24120301.jpg",
  "./images/album/HOP/BANG_HOP_HIPTAPEver TRADING B_24120401.jpg",
  "./images/album/HOP/BANG_HOP_PLATFORMver PHOTOCARD_24121101.jpg",
  "./images/album/HOP/BANG_HOP_PLATFORMver SET_24121001.jpg",
  "./images/album/HOP/BANG_HOP_SKZHOPver PHOTOCARD_24120501.jpg",
  "./images/album/HOP/BIN_HOP_ACCORDIONver MONOCHROME_24120803.jpg",
  "./images/album/HOP/BIN_HOP_ACCORDIONver PHOTOCARD_24120703.jpg",
  "./images/album/HOP/BIN_HOP_ACCORDIONver POB_24120903.jpg",
  "./images/album/HOP/BIN_HOP_HIPTAPEver PHOTOCARD_24120103.jpg",
  "./images/album/HOP/BIN_HOP_HIPTAPEver TRADING A_24120303.jpg",
  "./images/album/HOP/BIN_HOP_HIPTAPEver TRADING B_24120403.jpg",
  "./images/album/HOP/BIN_HOP_PLATFORMver PHOTOCARD_24121103.jpg",
  "./images/album/HOP/BIN_HOP_PLATFORMver SET_24121003.jpg",
  "./images/album/HOP/BIN_HOP_SKZHOPver PHOTOCARD_24120503.jpg",
  "./images/album/HOP/HAN_HOP_ACCORDIONver MONOCHROME_24120805.jpg",
  "./images/album/HOP/HAN_HOP_ACCORDIONver PHOTOCARD_24120705.jpg",
  "./images/album/HOP/HAN_HOP_ACCORDIONver POB_24120905.jpg",
  "./images/album/HOP/HAN_HOP_HIPTAPEver PHOTOCARD_24120105.jpg",
  "./images/album/HOP/HAN_HOP_HIPTAPEver TRADING A_24120305.jpg",
  "./images/album/HOP/HAN_HOP_HIPTAPEver TRADING B_24120405.jpg",
  "./images/album/HOP/HAN_HOP_PLATFORMver PHOTOCARD_24121105.jpg",
  "./images/album/HOP/HAN_HOP_PLATFORMver SET_24121005.jpg",
  "./images/album/HOP/HAN_HOP_SKZHOPver PHOTOCARD_24120505.jpg",
  "./images/album/HOP/HYUN_HOP_ACCORDIONver MONOCHROME_24120804.jpg",
  "./images/album/HOP/HYUN_HOP_ACCORDIONver PHOTOCARD_24120704.jpg",
  "./images/album/HOP/HYUN_HOP_ACCORDIONver POB_24120904.jpg",
  "./images/album/HOP/HYUN_HOP_HIPTAPEver PHOTOCARD_24120104.jpg",
  "./images/album/HOP/HYUN_HOP_HIPTAPEver TRADING A_24120304.jpg",
  "./images/album/HOP/HYUN_HOP_HIPTAPEver TRADING B_24120404.jpg",
  "./images/album/HOP/HYUN_HOP_PLATFORMver PHOTOCARD_24121104.jpg",
  "./images/album/HOP/HYUN_HOP_PLATFORMver SET_24121004.jpg",
  "./images/album/HOP/HYUN_HOP_SKZHOPver PHOTOCARD_24120504.jpg",
  "./images/album/HOP/IN_HOP_ACCORDIONver MONOCHROME_24120808.jpg",
  "./images/album/HOP/IN_HOP_ACCORDIONver PHOTOCARD_24120708.jpg",
  "./images/album/HOP/IN_HOP_ACCORDIONver POB_24120908.jpg",
  "./images/album/HOP/IN_HOP_HIPTAPEver PHOTOCARD_24120108.jpg",
  "./images/album/HOP/IN_HOP_HIPTAPEver TRADING A_24120308.jpg",
  "./images/album/HOP/IN_HOP_HIPTAPEver TRADING B_24120408.jpg",
  "./images/album/HOP/IN_HOP_PLATFORMver PHOTOCARD_24121108.jpg",
  "./images/album/HOP/IN_HOP_PLATFORMver SET_24121008.jpg",
  "./images/album/HOP/IN_HOP_SKZHOPver PHOTOCARD_24120508.jpg",
  "./images/album/HOP/KNOW_HOP_ACCORDIONver MONOCHROME_24120802.jpg",
  "./images/album/HOP/KNOW_HOP_ACCORDIONver PHOTOCARD_24120702.jpg",
  "./images/album/HOP/KNOW_HOP_ACCORDIONver POB_24120902.jpg",
  "./images/album/HOP/KNOW_HOP_HIPTAPEver PHOTOCARD_24120102.jpg",
  "./images/album/HOP/KNOW_HOP_HIPTAPEver TRADING A_24120302.jpg",
  "./images/album/HOP/KNOW_HOP_HIPTAPEver TRADING B_24120402.jpg",
  "./images/album/HOP/KNOW_HOP_PLATFORMver PHOTOCARD_24121102.jpg",
  "./images/album/HOP/KNOW_HOP_PLATFORMver SET_24121002.jpg",
  "./images/album/HOP/KNOW_HOP_SKZHOPver PHOTOCARD_24120502.jpg",
  "./images/album/HOP/LIX_HOP_ACCORDIONver MONOCHROME_24120806.jpg",
  "./images/album/HOP/LIX_HOP_ACCORDIONver PHOTOCARD_24120706.jpg",
  "./images/album/HOP/LIX_HOP_ACCORDIONver POB_24120906.jpg",
  "./images/album/HOP/LIX_HOP_HIPTAPEver PHOTOCARD_24120106.jpg",
  "./images/album/HOP/LIX_HOP_HIPTAPEver TRADING A_24120306.jpg",
  "./images/album/HOP/LIX_HOP_HIPTAPEver TRADING B_24120406.jpg",
  "./images/album/HOP/LIX_HOP_PLATFORMver PHOTOCARD_24121106.jpg",
  "./images/album/HOP/LIX_HOP_PLATFORMver SET_24121006.jpg",
  "./images/album/HOP/LIX_HOP_SKZHOPver PHOTOCARD_24120506.jpg",
  "./images/album/HOP/MIN_HOP_ACCORDIONver MONOCHROME_24120807.jpg",
  "./images/album/HOP/MIN_HOP_ACCORDIONver PHOTOCARD_24120707.jpg",
  "./images/album/HOP/MIN_HOP_ACCORDIONver POB_24120907.jpg",
  "./images/album/HOP/MIN_HOP_HIPTAPEver PHOTOCARD_24120107.jpg",
  "./images/album/HOP/MIN_HOP_HIPTAPEver TRADING A_24120307.jpg",
  "./images/album/HOP/MIN_HOP_HIPTAPEver TRADING B_24120407.jpg",
  "./images/album/HOP/MIN_HOP_PLATFORMver PHOTOCARD_24121107.jpg",
  "./images/album/HOP/MIN_HOP_PLATFORMver SET_24121007.jpg",
  "./images/album/HOP/MIN_HOP_SKZHOPver PHOTOCARD_24120507.jpg",
  "./images/album/HOP/SKZ_HOP_HIPTAPEver UNIT_24120209.jpg",
  "./images/album/HOP/SKZ_HOP_HIPTAPEver UNIT_24120210.jpg",
  "./images/album/HOP/SKZ_HOP_HIPTAPEver UNIT_24120211.jpg",
  "./images/album/HOP/SKZ_HOP_HIPTAPEver UNIT_24120212.jpg",
  "./images/album/HOP/SKZ_HOP_SKZHOPver UNIT_24120609.jpg",
  "./images/album/HOP/SKZ_HOP_SKZHOPver UNIT_24120610.jpg",
  "./images/album/HOP/SKZ_HOP_SKZHOPver UNIT_24120611.jpg",
  "./images/album/HOP/SKZ_HOP_SKZHOPver UNIT_24120612.jpg",

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

  // === BENEFIT / HOP ===
  "./images/benefit/HOP/BANG_HOP_JYP SHOP PLATFORMver_24121301.jpg",
  "./images/benefit/HOP/BANG_HOP_JYP SHOP_24121201.jpg",
  "./images/benefit/HOP/BANG_HOP_POP-UP ALBUM PURCHASE_24121501.jpg",
  "./images/benefit/HOP/BANG_HOP_POP-UP LD A_24121601.jpg",
  "./images/benefit/HOP/BANG_HOP_POP-UP LD B_24121701.jpg",
  "./images/benefit/HOP/BANG_HOP_POP-UP MD_24121401.jpg",
  "./images/benefit/HOP/BIN_HOP_JYP SHOP PLATFORMver_24121303.jpg",
  "./images/benefit/HOP/BIN_HOP_JYP SHOP_24121203.jpg",
  "./images/benefit/HOP/BIN_HOP_POP-UP ALBUM PURCHASE_24121503.jpg",
  "./images/benefit/HOP/BIN_HOP_POP-UP LD A_24121603.jpg",
  "./images/benefit/HOP/BIN_HOP_POP-UP LD B_24121703.jpg",
  "./images/benefit/HOP/BIN_HOP_POP-UP MD_24121403.jpg",
  "./images/benefit/HOP/HAN_HOP_JYP SHOP PLATFORMver_24121305.jpg",
  "./images/benefit/HOP/HAN_HOP_JYP SHOP_24121205.jpg",
  "./images/benefit/HOP/HAN_HOP_POP-UP ALBUM PURCHASE_24121505.jpg",
  "./images/benefit/HOP/HAN_HOP_POP-UP LD A_24121605.jpg",
  "./images/benefit/HOP/HAN_HOP_POP-UP LD B_24121705.jpg",
  "./images/benefit/HOP/HAN_HOP_POP-UP MD_24121405.jpg",
  "./images/benefit/HOP/HYUN_HOP_JYP SHOP PLATFORMver_24121304.jpg",
  "./images/benefit/HOP/HYUN_HOP_JYP SHOP_24121204.jpg",
  "./images/benefit/HOP/HYUN_HOP_POP-UP ALBUM PURCHASE_24121504.jpg",
  "./images/benefit/HOP/HYUN_HOP_POP-UP LD A_24121604.jpg",
  "./images/benefit/HOP/HYUN_HOP_POP-UP LD B_24121704.jpg",
  "./images/benefit/HOP/HYUN_HOP_POP-UP MD_24121404.jpg",
  "./images/benefit/HOP/IN_HOP_JYP SHOP PLATFORMver_24121308.jpg",
  "./images/benefit/HOP/IN_HOP_JYP SHOP_24121208.jpg",
  "./images/benefit/HOP/IN_HOP_POP-UP ALBUM PURCHASE_24121508.jpg",
  "./images/benefit/HOP/IN_HOP_POP-UP LD A_24121608.jpg",
  "./images/benefit/HOP/IN_HOP_POP-UP LD B_24121708.jpg",
  "./images/benefit/HOP/IN_HOP_POP-UP MD_24121408.jpg",
  "./images/benefit/HOP/KNOW_HOP_JYP SHOP PLATFORMver_24121302.jpg",
  "./images/benefit/HOP/KNOW_HOP_JYP SHOP_24121202.jpg",
  "./images/benefit/HOP/KNOW_HOP_POP-UP ALBUM PURCHASE_24121502.jpg",
  "./images/benefit/HOP/KNOW_HOP_POP-UP LD A_24121602.jpg",
  "./images/benefit/HOP/KNOW_HOP_POP-UP LD B_24121702.jpg",
  "./images/benefit/HOP/KNOW_HOP_POP-UP MD_24121402.jpg",
  "./images/benefit/HOP/LIX_HOP_JYP SHOP PLATFORMver_24121306.jpg",
  "./images/benefit/HOP/LIX_HOP_JYP SHOP_24121206.jpg",
  "./images/benefit/HOP/LIX_HOP_POP-UP ALBUM PURCHASE_24121506.jpg",
  "./images/benefit/HOP/LIX_HOP_POP-UP LD A_24121606.jpg",
  "./images/benefit/HOP/LIX_HOP_POP-UP LD B_24121706.jpg",
  "./images/benefit/HOP/LIX_HOP_POP-UP MD_24121406.jpg",
  "./images/benefit/HOP/MIN_HOP_JYP SHOP PLATFORMver_24121307.jpg",
  "./images/benefit/HOP/MIN_HOP_JYP SHOP_24121207.jpg",
  "./images/benefit/HOP/MIN_HOP_POP-UP ALBUM PURCHASE_24121507.jpg",
  "./images/benefit/HOP/MIN_HOP_POP-UP LD A_24121607.jpg",
  "./images/benefit/HOP/MIN_HOP_POP-UP LD B_24121707.jpg",
  "./images/benefit/HOP/MIN_HOP_POP-UP MD_24121407.jpg",

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
  "./images/benefit/KARMA/SKZ_KARMA_POP-UP ALBUM SET PURCHASE 1ST_25081311.jpg"
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

// 4. 화면을 그려주는 함수 (render)
function render(filterMember = "전체") {
    const gridContainer = document.getElementById('poca-container') || document.getElementById('pcGrid');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';
    gridContainer.className = 'grid'; 
    
    const filtered = filterMember === "전체" ? pocaData : pocaData.filter(p => p.member === filterMember);

    if (!isGroupedView) {
        filtered.forEach(poca => gridContainer.appendChild(createCard(poca)));
    } else {
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
            pocast.forEach(poca => subGrid.appendChild(createCard(poca)));
            section.appendChild(subGrid);
            gridContainer.appendChild(section);
        }
    }
    updateCounter(filterMember); 
}

// 5. 카드 한 장 만드는 함수 (우클릭 기능 추가됨!)
function createCard(poca) {
    const card = document.createElement('div');
    card.className = 'poca-card';
    if (localStorage.getItem(poca.unicode) === 'true') card.classList.add('collected');
    
    const safeImgPath = encodeURI(poca.img);
    
    // 포카 하단에는 카테고리(폴더명)만 소문자로 표시
    card.innerHTML = `
        <img src="${safeImgPath}">
        <div class="poca-label">
            <span class="poca-category">${poca.category.toLowerCase()}</span>
        </div>
    `;
    
    // 왼쪽 클릭: 수집 체크
    card.onclick = () => {
        card.classList.toggle('collected');
        localStorage.setItem(poca.unicode, card.classList.contains('collected'));
        const activeBtn = document.querySelector('#filter-members .active');
        updateCounter(activeBtn ? activeBtn.innerText : "전체");
    };

    // 우클릭: 상세 정보(멤버, 버전, 앨범 등) 출력
    card.oncontextmenu = (e) => {
        e.preventDefault();
        const modal = document.getElementById('info-modal');
        const modalImg = document.getElementById('modal-img');
        const modalInfo = document.getElementById('modal-info');

        if (modal) {
            modalImg.src = safeImgPath;
            modalInfo.innerHTML = `
                <div style="line-height: 1.6;">
                    <b style="font-size: 1.1em; display: block; margin-bottom: 5px;">${poca.member}</b>
                    <strong>${poca.album}</strong><br>
                    <span>${poca.version}</span><br>
                    <span style="color: #888; font-size: 0.9em;">category: ${poca.category.toLowerCase()}</span><br>
                    <small style="color: #bbb;">#${poca.unicode}</small>
                </div>`;
            modal.style.display = 'flex';
        }
    };

    return card;
}

// 6. 페이지 로드 시 초기화 및 모든 버튼/모달 설정
document.addEventListener('DOMContentLoaded', () => {
    render();
    
    // 뷰 모드 버튼 연결
    if(document.getElementById('view-mode-btn')) {
        document.getElementById('view-mode-btn').onclick = function() {
            isGroupedView = !isGroupedView;
            this.innerText = isGroupedView ? "전체" : "리스트"; 
            const activeBtn = document.querySelector('#filter-members .active');
            render(activeBtn ? activeBtn.innerText : "전체");
        };
    }

    // 필터 버튼 연결
    document.querySelectorAll('#filter-members .filter-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            render(btn.innerText);
        };
    });

    // 리셋 버튼 설정 (안으로 이동됨)
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.onclick = () => {
            if (confirm("모든 수집 데이터를 초기화할까요?")) {
                pocaData.forEach(p => localStorage.removeItem(p.unicode));
                location.reload();
            }
        };
    }

    // 모달 닫기 기능 설정 (안으로 이동됨)
    const modal = document.getElementById('info-modal');
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn && modal) {
        closeBtn.onclick = () => { modal.style.display = 'none'; };
    }
    window.onclick = (e) => {
        if (e.target === modal) { modal.style.display = 'none'; }
    };
});

// 7. 카운터 업데이트 함수
function updateCounter(member = "전체") {
    const filtered = member === "전체" ? pocaData : pocaData.filter(p => p.member === member);
    const collected = filtered.filter(p => localStorage.getItem(p.unicode) === 'true').length;
    if(document.getElementById('collect-count')) document.getElementById('collect-count').innerText = collected;
    if(document.getElementById('total-count')) document.getElementById('total-count').innerText = filtered.length;
}