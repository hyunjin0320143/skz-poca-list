// 전체 파일 경로 리스트 (DO IT + KARMA 추가)
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

// 멤버 표기 매핑
const memberMap = { 
    "BANG": "방찬", "KNOW": "리노", "BIN": "창빈", "HYUN": "현진", 
    "HAN": "한", "LIX": "필릭스", "MIN": "승민", "IN": "아이엔", "SKZ": "단체" 
};

// 리스트 보기에서 왼쪽부터 정렬될 멤버 순서
const memberOrder = ["방찬", "리노", "창빈", "현진", "한", "필릭스", "승민", "아이엔", "단체", "기타"];

// 데이터 가공 및 정렬 로직 (상대 경로용으로 수정 완료)
const pocaData = rawPaths.map(path => {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const fileNameParts = fileName.split('_');
    
    const category = pathParts[2]; // album 또는 benefit
    const albumName = pathParts[3]; // DO IT, HOP, KARMA

    let unicodePart = fileNameParts[fileNameParts.length - 1] 
        ? fileNameParts[fileNameParts.length - 1].split('.')[0].replace(/[^0-9]/g, "") 
        : "0";

    return {
        member: memberMap[fileNameParts[0]] || "기타",
        album: albumName,
        version: fileNameParts[2] || "",
        unicode: unicodePart,
        category: category,
        img: path // "./images/..." 경로를 그대로 사용합니다.
    };
}).sort((a, b) => parseInt(b.unicode) - parseInt(a.unicode));

let isGroupedView = false; 

function render(filterMember = "전체") {
    const gridContainer = document.getElementById('pcGrid');
    gridContainer.innerHTML = '';
    const filtered = filterMember === "전체" ? pocaData : pocaData.filter(p => p.member === filterMember);

    if (!isGroupedView) {
        const grid = document.createElement('div');
        grid.className = 'grid';
        filtered.forEach(poca => grid.appendChild(createCard(poca)));
        gridContainer.appendChild(grid);
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
            const [alb, ver] = title.split(' | ');
            section.innerHTML = `<div class="group-title">${alb}<span>|</span>${ver}</div>`;
            
            const grid = document.createElement('div');
            grid.className = 'grid';
            
            pocast.sort((a, b) => {
                const orderA = memberOrder.indexOf(a.member);
                const orderB = memberOrder.indexOf(b.member);
                if (orderA !== orderB) return orderA - orderB;
                return parseInt(a.unicode) - parseInt(b.unicode);
            });
            
            pocast.forEach(poca => grid.appendChild(createCard(poca)));
            section.appendChild(grid);
            gridContainer.appendChild(section);
        }
    }
    // 이 부분이 핵심! 현재 필터링된 멤버 이름을 카운터에 전달합니다.
    updateCounter(filterMember); 
}

function createCard(poca) {
    const card = document.createElement('div');
    card.className = 'poca-card';
    if (localStorage.getItem(poca.unicode) === 'true') card.classList.add('collected');
    
    card.innerHTML = `
        <img src="${poca.img}">
        <div class="poca-label">${poca.category}</div>
    `;
    
    card.onclick = () => {
        card.classList.toggle('collected');
        localStorage.setItem(poca.unicode, card.classList.contains('collected'));
        
        // 클릭 시 현재 활성화된 멤버 버튼의 텍스트를 파악해 카운트를 업데이트함
        const activeBtn = document.querySelector('#filter-members .active');
        const currentMember = activeBtn ? activeBtn.innerText : "전체";
        updateCounter(currentMember);
    };

    card.oncontextmenu = (e) => {
        e.preventDefault();
        const modal = document.getElementById('info-modal');
        document.getElementById('modal-img').src = poca.img;
        document.getElementById('modal-info').innerHTML = `
            <div style="line-height: 1.8;">
                <div style="font-size: 16px; font-weight: bold; color: #111;">${poca.album}</div>
                <div style="font-size: 14px; color: #444;">${poca.version}</div>
                <div style="color: #bbb; font-size: 12px; margin-top: 10px;">#${poca.unicode}</div>
            </div>`;
        modal.style.display = 'block';
    };
    return card;
}

document.getElementById('view-mode-btn').onclick = function() {
    isGroupedView = !isGroupedView;
    // 텍스트를 "전체", "리스트"로 짧게 변경
    this.innerText = isGroupedView ? "전체" : "리스트"; 
    render(document.querySelector('#filter-members .active').innerText);
};

document.querySelectorAll('#filter-members .filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render(btn.innerText);
    };
});

document.getElementById('reset-btn').onclick = () => {
    if(confirm("모든 체크를 초기화할까요?")) {
        pocaData.forEach(p => localStorage.removeItem(p.unicode));
        render(document.querySelector('#filter-members .active').innerText);
    }
};

function updateCounter(member = "전체") {
    // 1. 전체 데이터 중 선택된 멤버(또는 전체)만 걸러냄
    const filtered = member === "전체" ? pocaData : pocaData.filter(p => p.member === member);
    
    // 2. 그 멤버의 전체 개수와 체크된 개수 계산
    const total = filtered.length;
    const collected = filtered.filter(p => localStorage.getItem(p.unicode) === 'true').length;
    
    // 3. 화면에 표시
    document.getElementById('collect-count').innerText = collected;
    document.getElementById('total-count').innerText = total;
    
    // (보너스) 만약 HTML에 멤버 이름을 표시할 공간이 있다면 넣어주세요. 
    // 예: <span id="current-member-display"></span>
    const nameDisplay = document.getElementById('current-member-display');
    if(nameDisplay) nameDisplay.innerText = member;
}

const modal = document.getElementById('info-modal');
document.querySelector('.close-btn').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; }

document.addEventListener('DOMContentLoaded', () => render());

function searchPoca() {
    const query = document.getElementById('search-input').value.toLowerCase(); // 입력한 글자
    const cards = document.querySelectorAll('.poca-card'); // 모든 포카 카드들

    cards.forEach(card => {
        // 카드 안의 텍스트(멤버명, 버전 등)를 가져옵니다.
        const label = card.querySelector('.poca-label').innerText.toLowerCase();
        
        // 검색어가 포함되어 있으면 보여주고, 아니면 숨깁니다.
        if (label.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}