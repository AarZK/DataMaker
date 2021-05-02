package com.sequoiadb.datamaker.db.ssql;

import com.sequoiadb.datamaker.model.conf.ResourceConf;
import com.sequoiadb.datamaker.util.parser.ConfParser;
import com.sequoiadb.datamaker.util.parser.ParamParser;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.jdbc.ScriptRunner;

import java.io.*;
import java.nio.charset.Charset;
import java.sql.Connection;

/***
 * @Program     : DataMaker
 * @Description : execute sql file
 * @Author      : Li Zekun
 * @Since       : 2021/5/3
 **/
public class SqlRunner {

    static {
        ConfParser.parseConf(ParamParser.CONF_PATH);
        ConfParser.initResourceConf();
    }

    public static void executeScript(String scriptPath) {
        Connection connection = SsqlManager.getConnection();
        ScriptRunner scriptRunner = null;
        try {
            scriptRunner = new ScriptRunner(connection);
            Resources.setCharset(Charset.forName(ResourceConf.CHARSET));
            scriptRunner.runScript(
                    new InputStreamReader(
                            new FileInputStream(scriptPath),
                            ResourceConf.CHARSET
                    )
            );
            scriptRunner.closeConnection();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            SsqlManager.releaseConnection(connection);
        }
    }
}
