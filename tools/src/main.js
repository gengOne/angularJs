import launch from './launch';
import appConfig from '';
import gengCtrl from './geng.controller';


export default angular.module('app',[
    'ionic',
    'oc.lazyLoad',
    'ngCordova'
])
.run(launch)
.config(appConfig)
.controller('gengCtrl',gengCtrl);