package com.sequoiadb.datamaker.db.ssql;

import java.sql.*;
import java.util.HashMap;
import java.util.Map;

/***
 * @Program     : DataMaker
 * @Description : collect meta message of target table
 * @Author      : Li Zekun
 * @Since       : 2021/5/3
 **/
public class MetaCollector {

    public static Map<String, Object>[] collectMetaMsg(String tableName) {
        Map<String, Object>[] metaArray = null;
        try (
                Connection connection = SsqlManager.getConnection();
                Statement statement = connection.createStatement()
        ) {
            String sql = "SELECT * FROM " + tableName;
            ResultSetMetaData resultSetMetaData = statement.executeQuery(sql).getMetaData();
            metaArray = new Map[resultSetMetaData.getColumnCount()];
            for (int i = 0; i < resultSetMetaData.getColumnCount(); i++) {
                metaArray[i] = new HashMap<String, Object>(5);
                metaArray[i].put("name", resultSetMetaData.getColumnName(i + 1));
                metaArray[i].put("sql_type", resultSetMetaData.getColumnTypeName(i + 1));
                metaArray[i].put("java_type", resultSetMetaData.getColumnClassName(i + 1));
                metaArray[i].put("precision", resultSetMetaData.getPrecision(i + 1));
                metaArray[i].put("scale", resultSetMetaData.getScale(i + 1));
            }
        } catch (SQLException exception) {
            exception.printStackTrace();
        }
        return metaArray;
    }
}
