export interface IPost {
    id: string;
    attributes: {
        title: string;
        description: string;
        Image: {
            data: {
                attributes: {
                    url: string;
                    alternativeText: string;
                };
            };
        };
        liga: {
            data: {
                id: string;
                attributes: {
                    Sex: string;
                };
            };
        };
    };
}


export interface ITeam {
    id: string;
    Logo: {
        data: {
            attributes: {
                url: string;
            };
        } | null;
    };
    Statistics: string;
}

export interface IGame {
    id: string;
    attributes: {
        Event_location: string;
        Feature_game: boolean;
        Komanda: ITeam;
        Oponent: ITeam;
    };
}



export interface ISubMenuItem {
    label: string;
    url: string;
}

export interface IMenuItem {
    id: string | number;
    label: string;
    url: string;
    order: number;
    submenu?: ISubMenuItem[] | undefined;
}

export interface IMenuProps {
    menuItems:{
        items:IMenuItem[];
    }
}