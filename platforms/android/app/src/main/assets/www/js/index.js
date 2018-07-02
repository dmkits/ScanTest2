/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener( 'pause', this.onPause.bind( this ), false );
        document.addEventListener('resume', this.onResume.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //alert("deviceready");
        this.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var ZebraBarcodePlugin=require('zebra_barcode_plugin');
        alert("deviceready");
        //alert("ZebraBarcodePlugin="+ZebraBarcodePlugin);
        //alert("ZebraBarcodePlugin JSON="+JSON.stringify(ZebraBarcodePlugin));

        cordova.plugins.
        ZebraBarcodePlugin.startHardKeyRead(function (data) {
                if(document.getElementById("app")['data-workingDoc'] =='inventory'){
                    createTableRow(data);
                }
            });

        //activateScanReader();
    },

    onPause:function(){
        //disActivateScanReader();
    },
    onResume:function(){
        //activateScanReader();
    }

};

app.initialize();

//function activateScanReader(){
//
//
//    //cordova.plugins.
//    //    CipherlabRS30CordovaPlugin.initialise(/* there is no callback here */);
//    //
//    cordova.plugins.
//        CipherlabRS30CordovaPlugin.setReceiveScanCallback(function (data) {
//            if(document.getElementById("app")['data-workingDoc'] =='inventory'){
//                createTableRow(data);
//            }
//        });
//}

//function disActivateScanReader(){
//    cordova.plugins.CipherlabRS30CordovaPlugin.destroy(function () {
//    alert("destroyed");});
//}