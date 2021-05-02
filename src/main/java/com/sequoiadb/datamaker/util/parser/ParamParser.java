package com.sequoiadb.datamaker.util.parser;

import com.beust.jcommander.JCommander;
import com.beust.jcommander.Parameter;

/***
 * @Program     : DataMaker
 * @Description : parse parameters
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class ParamParser {

    public static String CONF_PATH;

    public static void parse(String[] mainArgs) {
        Args args = new Args();
        JCommander jCommander = JCommander.newBuilder().addObject(args).build();
        jCommander.parse(mainArgs);
        args.parse(jCommander);
        CONF_PATH = args.confPath;
    }

    public static class Args {

        @Parameter(
                names = "--help",
                help = true,
                order = 1
        )
        public boolean help;

        @Parameter(
                names = "-conf",
                description = "the absolute path of configuration file",
                required = true,
                help = true,
                order = 2
        )
        public String confPath;

        void parse(JCommander jCommander) {
            if (help) {
                jCommander.setProgramName("java -jar DataMaker.jar");
                jCommander.usage();
            }
        }
    }
}
