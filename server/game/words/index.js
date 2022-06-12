const path = require('path');
const tGameWords = require('../../models/GameWords');
const log = require('../../modules/logger');

exports.AddQuery = async (data) => {

    try {
        const query = await tGameWords.create({
            query: data.query,
            answers: JSON.stringify(data.answers)
        });

        return query.id;
    } catch (err) {
        log.error('Failed add query/answer in db', err.message);
    }
};


exports.GetAllQuery = async () => {
    try {
        return await tGameWords.findAll();
    } catch (err) {
        log.error('Failed get all query/answer in db', err.message);
    }
};

exports.GetQueryById = async (id) => {

    try {
        return await tGameWords.findByPk(id);
    } catch (err) {
        log.error(`Failed find query by id ${id}`, err.message);
    }

};

exports.DeleteQueryById = async (id) => {

    try {
        const query = await tGameWords.findByPk(id);
        if (query != null) {
            await query.destroy();
            return true;
        } else {
            return false;
        }
    } catch (err) {
        log.error(`Failed delete query by id ${id}`, err.message);
        return false;
    }

};