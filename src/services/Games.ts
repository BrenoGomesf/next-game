import { sleep } from "@/helpers/promises";
import Games from "@/libs/database/Games";


const GamesService = {
    getGamesBySlug: async (slug: string) => {
        await sleep(1000);
        return Games.getOne({ where: {slug}})
    },
    getGamesList: async (page = 1, limit = 10) => {
        await sleep(1000);
        const offset  = (page - 1) * limit;
        const data    = await Games.get({}, {}, limit, offset);
        const total    = await  Games.count({});
        const totalPages  = Math.ceil(total / limit);
        return {
            data,
            metadata:{
                page,
                limit,
                offset,
                total,
                totalPages
            }
        }
    },

    getRandomGames: async(limit = 10) => {
        const total = await  Games.count({});
        const offset = Math.max(0, Math.floor(Math.random() * Number(total)) - limit);
        const data = await Games.get({},{}, limit, offset);
        const sorted = data.sort(() =>Math.random() > 0.5 ? 1 : -1);
        const totalPages  = Math.ceil(total / limit);

        return {
            data,
            metadata:{
                page: 1,
                limit,
                offset,
                total,
                totalPages
            }
        }
    }

}
export default GamesService