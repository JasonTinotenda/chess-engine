let PIECES = {Empty: 0,wP: 1,wN: 2,wB: 3,wR: 4,wQ: 5,
        wK: 6,bP: 7,bN: 8,bB: 9,bR: 10,bQ: 11,bK: 12};

let BRD_SQ_NUM = 120;

let FILES = {FILE_A:0,FILE_B:1,FILE_C:2,FILE_D:3,FILE_E:4,
        FILE_F:5,FILE_G:6,FILE_H:7,FILE_NONE:8};

let RANKS = {RANK_1:0,RANK_2:1,RANK_3:2,RANK_4:3,RANK_5:4,
        RANK_6:5,RANK_7:6,RANK_8:7,RANK_NONE:8};

let COLOURS = {WHITE:0,BLACK:1,BOTH:2};

let SQUARES = {A1:21,B1:31,C1:41,D1:51,E1:61,F1:71,G1:81,H1:91,
        A2:22,B2:32,C2:42,D2:52,E2:62,F2:72,G2:82,H2:92,
        A3:23,B3:33,C3:43,D3:53,E3:63,F3:73,G3:83,H3:93,
        A4:24,B4:34,C4:44,D4:54,E4:64,F4:74,G4:84,H4:94,
        A5:25,B5:35,C5:45,D5:55,E5:65,F5:75,G5:85,H5:95,
        A6:26,B6:36,C6:46,D6:56,E6:66,F6:76,G6:86,H6:96,
        A7:27,B7:37,C7:47,D7:57,E7:67,F7:77,G7:87,H7:97,
        A8:28,B8:38,C8:48,D8:58,E8:68,F8:78,G8:88,H8:98,
        NO_SQ:99,OFFBOARD:100};

let BOOL = {FALSE:0,TRUE:1};

let FilesBrd = new Array(BRD_SQ_NUM);
let RanksBrd = new Array(BRD_SQ_NUM);

function FR2SQ(f,r) {
    return ( (21 + f) + (r * 10) );
}