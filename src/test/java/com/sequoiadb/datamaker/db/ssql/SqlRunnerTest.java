package com.sequoiadb.datamaker.db.ssql;

import com.sequoiadb.datamaker.util.parser.ParamParser;
import org.junit.BeforeClass;
import org.junit.Test;

import static org.junit.Assert.*;

public class SqlRunnerTest {

    @BeforeClass
    public static void beforeClass() throws Exception {
        String confPath = "Z:\\garage\\DataMaker\\src\\test\\resources\\conf\\DataMaker.properties";
        String[] args = {"-conf", confPath};
        ParamParser.parse(args);
        SsqlManager.initCp();
    }

    @Test
    public void executeScript() {
        SqlRunner.executeScript("Z:\\garage\\DataMaker\\src\\test\\resources\\sql\\h_core_tx_union_his_perf_test.sql");
    }
}