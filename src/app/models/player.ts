export interface Player {
    playerName: string,
    characterName: string,
    race: string,
    gender: string,
    alignment: string,
    deity: string,
    size: string,
    hair: string,
    eyes: string,
    height: string,
    weight: string,
    age: number,
    background: string,

    hitPoints: number,

    // TODO: break into separate model
    strAS: number,
    dexAS: number,
    conAS: number,
    intAS: number,
    wisAS: number,
    chaAS: number,

    // TODO: break into separate model
    strST: boolean,
    dexST: boolean,
    conST: boolean,
    intST: boolean,
    wisST: boolean,
    chaST: boolean
}