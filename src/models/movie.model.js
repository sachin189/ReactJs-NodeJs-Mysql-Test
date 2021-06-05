const query = require('../db/db');
const TABLES = require('../db/table.constant');

class MovieModel {

    find = async (params = {}) => {

        let sql = `select mv.*,a.genres,b.actors from tbl_movies mv
                    left join ( select mgd.fk_movie_id as fk_movie_id, group_concat(mg.title) genres from tbl_movie_genres_details mgd
                    LEFT JOIN tbl_movies_genres mg ON mg.id = mgd.fk_genres_id
                    group by mgd.fk_movie_id ) as a ON a.fk_movie_id = mv.id
                    LEFT JOIN (  select mcd.fk_movie_id, group_concat(c.name) actors from tbl_movie_casting_details mcd  
                    LEFT JOIN tbl_casting c ON c.id = mcd.fk_casting_id group by mcd.fk_movie_id ) b ON b.fk_movie_id = mv.id
                    where status = 1 AND is_deleted = 0 group by mv.id`;
        if (!Object.keys(params).length) {
            return await query(sql);
        }
        return await query(sql, [...values]);
    }

    /* findOne = async (params = {}) => {

        let sql = `select mv.*,a.genres,b.actors from tbl_movies mv
                    left join ( select mgd.fk_movie_id as fk_movie_id, group_concat(mg.title) genres from tbl_movie_genres_details mgd
                    LEFT JOIN tbl_movies_genres mg ON mg.id = mgd.fk_genres_id
                    group by mgd.fk_movie_id ) as a ON a.fk_movie_id = mv.id
                    LEFT JOIN (  select mcd.fk_movie_id, group_concat(c.name) actors from tbl_movie_casting_details mcd  
                    LEFT JOIN tbl_casting c ON c.id = mcd.fk_casting_id group by mcd.fk_movie_id ) b ON b.fk_movie_id = mv.id
                    where status = 1 AND is_deleted = 0 AND (mv.id = 0 OR 0=0) group by mv.id`;
        if (!Object.keys(params).length) {
            return await query(sql);
        }
        return await query(sql, [...values]);
    } */

}

module.exports = new MovieModel;