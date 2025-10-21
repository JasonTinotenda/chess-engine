function initFilesRankBrd() {
    let index = 0;
    let file = FILES.FILE_A;
    let rank = RANKS.RANK_1;
    let sq = SQUARES.A1;

    for(index = 0; index < BRD_SQ_NUM; ++index) {
        FilesBrd[index] = SQUARES.OFFBOARD;
        RanksBrd[index] = SQUARES.OFFBOARD;
    };

    for(rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
        for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
            sq = FR2SQ(file,rank);
            FilesBrd[sq] = file;
            RanksBrd[sq] = rank;
        };    
    };
    console.log("FilesBrd[0]: " + FilesBrd[0] + " RanksBrd[0]: " + RanksBrd[0] + "\n");
}

function init(){
    console.log("init() called\n");
    initFilesRankBrd();
}