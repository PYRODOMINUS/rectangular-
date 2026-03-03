gdjs.testin_32stuffCode = {};
gdjs.testin_32stuffCode.localVariables = [];
gdjs.testin_32stuffCode.idToCallbackMap = new Map();
gdjs.testin_32stuffCode.GDExitObjects1= [];
gdjs.testin_32stuffCode.GDExitObjects2= [];
gdjs.testin_32stuffCode.GDFinishObjects1= [];
gdjs.testin_32stuffCode.GDFinishObjects2= [];
gdjs.testin_32stuffCode.GDWallObjects1= [];
gdjs.testin_32stuffCode.GDWallObjects2= [];
gdjs.testin_32stuffCode.GDPlatform_9595horizObjects1= [];
gdjs.testin_32stuffCode.GDPlatform_9595horizObjects2= [];
gdjs.testin_32stuffCode.GDPlayerObjects1= [];
gdjs.testin_32stuffCode.GDPlayerObjects2= [];
gdjs.testin_32stuffCode.GDOperatorPlusBitmapText3Objects1= [];
gdjs.testin_32stuffCode.GDOperatorPlusBitmapText3Objects2= [];
gdjs.testin_32stuffCode.GDBtnUpObjects1= [];
gdjs.testin_32stuffCode.GDBtnUpObjects2= [];
gdjs.testin_32stuffCode.GDBtnLeftObjects1= [];
gdjs.testin_32stuffCode.GDBtnLeftObjects2= [];
gdjs.testin_32stuffCode.GDBtnRightObjects1= [];
gdjs.testin_32stuffCode.GDBtnRightObjects2= [];
gdjs.testin_32stuffCode.GDBtnDownObjects1= [];
gdjs.testin_32stuffCode.GDBtnDownObjects2= [];
gdjs.testin_32stuffCode.GDMobileExitObjects1= [];
gdjs.testin_32stuffCode.GDMobileExitObjects2= [];
gdjs.testin_32stuffCode.GDTimerBoxObjects1= [];
gdjs.testin_32stuffCode.GDTimerBoxObjects2= [];
gdjs.testin_32stuffCode.GDNewTiledSpriteObjects1= [];
gdjs.testin_32stuffCode.GDNewTiledSpriteObjects2= [];
gdjs.testin_32stuffCode.GDPoundThruObjects1= [];
gdjs.testin_32stuffCode.GDPoundThruObjects2= [];
gdjs.testin_32stuffCode.GDWalkthruWallObjects1= [];
gdjs.testin_32stuffCode.GDWalkthruWallObjects2= [];
gdjs.testin_32stuffCode.GDPlayer2Objects1= [];
gdjs.testin_32stuffCode.GDPlayer2Objects2= [];
gdjs.testin_32stuffCode.GDPlayer4Objects1= [];
gdjs.testin_32stuffCode.GDPlayer4Objects2= [];
gdjs.testin_32stuffCode.GDspikeObjects1= [];
gdjs.testin_32stuffCode.GDspikeObjects2= [];
gdjs.testin_32stuffCode.GDPadLargeObjects1= [];
gdjs.testin_32stuffCode.GDPadLargeObjects2= [];
gdjs.testin_32stuffCode.GDPadSmallObjects1= [];
gdjs.testin_32stuffCode.GDPadSmallObjects2= [];
gdjs.testin_32stuffCode.GDPadMedObjects1= [];
gdjs.testin_32stuffCode.GDPadMedObjects2= [];
gdjs.testin_32stuffCode.GDWalkthruPlatObjects1= [];
gdjs.testin_32stuffCode.GDWalkthruPlatObjects2= [];
gdjs.testin_32stuffCode.GDInvisKillObjects1= [];
gdjs.testin_32stuffCode.GDInvisKillObjects2= [];
gdjs.testin_32stuffCode.GDCelPadMedObjects1= [];
gdjs.testin_32stuffCode.GDCelPadMedObjects2= [];
gdjs.testin_32stuffCode.GDCelPadSmallObjects1= [];
gdjs.testin_32stuffCode.GDCelPadSmallObjects2= [];
gdjs.testin_32stuffCode.GDCelPadLargeObjects1= [];
gdjs.testin_32stuffCode.GDCelPadLargeObjects2= [];
gdjs.testin_32stuffCode.GDTriggerObjects1= [];
gdjs.testin_32stuffCode.GDTriggerObjects2= [];


gdjs.testin_32stuffCode.mapOfGDgdjs_9546testin_959532stuffCode_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.testin_32stuffCode.GDPlayer2Objects1});
gdjs.testin_32stuffCode.mapOfGDgdjs_9546testin_959532stuffCode_9546GDBtnLeftObjects1Objects = Hashtable.newFrom({"BtnLeft": gdjs.testin_32stuffCode.GDBtnLeftObjects1});
gdjs.testin_32stuffCode.mapOfGDgdjs_9546testin_959532stuffCode_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.testin_32stuffCode.GDPlayer2Objects1});
gdjs.testin_32stuffCode.mapOfGDgdjs_9546testin_959532stuffCode_9546GDBtnRightObjects1Objects = Hashtable.newFrom({"BtnRight": gdjs.testin_32stuffCode.GDBtnRightObjects1});
gdjs.testin_32stuffCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.testin_32stuffCode.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testin_32stuffCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.testin_32stuffCode.GDPlayer2Objects1[i].getY() >= 1000 ) {
        isConditionTrue_0 = true;
        gdjs.testin_32stuffCode.GDPlayer2Objects1[k] = gdjs.testin_32stuffCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.testin_32stuffCode.GDPlayer2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.testin_32stuffCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.testin_32stuffCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.testin_32stuffCode.GDPlayer2Objects1[i].setPosition(331,326);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnLeft"), gdjs.testin_32stuffCode.GDBtnLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.testin_32stuffCode.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.testin_32stuffCode.mapOfGDgdjs_9546testin_959532stuffCode_9546GDPlayer2Objects1Objects, gdjs.testin_32stuffCode.mapOfGDgdjs_9546testin_959532stuffCode_9546GDBtnLeftObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.testin_32stuffCode.GDFinishObjects1);
{for(var i = 0, len = gdjs.testin_32stuffCode.GDFinishObjects1.length ;i < len;++i) {
    gdjs.testin_32stuffCode.GDFinishObjects1[i].setPosition(75,437);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnRight"), gdjs.testin_32stuffCode.GDBtnRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.testin_32stuffCode.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.testin_32stuffCode.mapOfGDgdjs_9546testin_959532stuffCode_9546GDPlayer2Objects1Objects, gdjs.testin_32stuffCode.mapOfGDgdjs_9546testin_959532stuffCode_9546GDBtnRightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.testin_32stuffCode.GDFinishObjects1);
{for(var i = 0, len = gdjs.testin_32stuffCode.GDFinishObjects1.length ;i < len;++i) {
    gdjs.testin_32stuffCode.GDFinishObjects1[i].setPosition(1059,437);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.testin_32stuffCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.testin_32stuffCode.GDExitObjects1.length = 0;
gdjs.testin_32stuffCode.GDExitObjects2.length = 0;
gdjs.testin_32stuffCode.GDFinishObjects1.length = 0;
gdjs.testin_32stuffCode.GDFinishObjects2.length = 0;
gdjs.testin_32stuffCode.GDWallObjects1.length = 0;
gdjs.testin_32stuffCode.GDWallObjects2.length = 0;
gdjs.testin_32stuffCode.GDPlatform_9595horizObjects1.length = 0;
gdjs.testin_32stuffCode.GDPlatform_9595horizObjects2.length = 0;
gdjs.testin_32stuffCode.GDPlayerObjects1.length = 0;
gdjs.testin_32stuffCode.GDPlayerObjects2.length = 0;
gdjs.testin_32stuffCode.GDOperatorPlusBitmapText3Objects1.length = 0;
gdjs.testin_32stuffCode.GDOperatorPlusBitmapText3Objects2.length = 0;
gdjs.testin_32stuffCode.GDBtnUpObjects1.length = 0;
gdjs.testin_32stuffCode.GDBtnUpObjects2.length = 0;
gdjs.testin_32stuffCode.GDBtnLeftObjects1.length = 0;
gdjs.testin_32stuffCode.GDBtnLeftObjects2.length = 0;
gdjs.testin_32stuffCode.GDBtnRightObjects1.length = 0;
gdjs.testin_32stuffCode.GDBtnRightObjects2.length = 0;
gdjs.testin_32stuffCode.GDBtnDownObjects1.length = 0;
gdjs.testin_32stuffCode.GDBtnDownObjects2.length = 0;
gdjs.testin_32stuffCode.GDMobileExitObjects1.length = 0;
gdjs.testin_32stuffCode.GDMobileExitObjects2.length = 0;
gdjs.testin_32stuffCode.GDTimerBoxObjects1.length = 0;
gdjs.testin_32stuffCode.GDTimerBoxObjects2.length = 0;
gdjs.testin_32stuffCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.testin_32stuffCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.testin_32stuffCode.GDPoundThruObjects1.length = 0;
gdjs.testin_32stuffCode.GDPoundThruObjects2.length = 0;
gdjs.testin_32stuffCode.GDWalkthruWallObjects1.length = 0;
gdjs.testin_32stuffCode.GDWalkthruWallObjects2.length = 0;
gdjs.testin_32stuffCode.GDPlayer2Objects1.length = 0;
gdjs.testin_32stuffCode.GDPlayer2Objects2.length = 0;
gdjs.testin_32stuffCode.GDPlayer4Objects1.length = 0;
gdjs.testin_32stuffCode.GDPlayer4Objects2.length = 0;
gdjs.testin_32stuffCode.GDspikeObjects1.length = 0;
gdjs.testin_32stuffCode.GDspikeObjects2.length = 0;
gdjs.testin_32stuffCode.GDPadLargeObjects1.length = 0;
gdjs.testin_32stuffCode.GDPadLargeObjects2.length = 0;
gdjs.testin_32stuffCode.GDPadSmallObjects1.length = 0;
gdjs.testin_32stuffCode.GDPadSmallObjects2.length = 0;
gdjs.testin_32stuffCode.GDPadMedObjects1.length = 0;
gdjs.testin_32stuffCode.GDPadMedObjects2.length = 0;
gdjs.testin_32stuffCode.GDWalkthruPlatObjects1.length = 0;
gdjs.testin_32stuffCode.GDWalkthruPlatObjects2.length = 0;
gdjs.testin_32stuffCode.GDInvisKillObjects1.length = 0;
gdjs.testin_32stuffCode.GDInvisKillObjects2.length = 0;
gdjs.testin_32stuffCode.GDCelPadMedObjects1.length = 0;
gdjs.testin_32stuffCode.GDCelPadMedObjects2.length = 0;
gdjs.testin_32stuffCode.GDCelPadSmallObjects1.length = 0;
gdjs.testin_32stuffCode.GDCelPadSmallObjects2.length = 0;
gdjs.testin_32stuffCode.GDCelPadLargeObjects1.length = 0;
gdjs.testin_32stuffCode.GDCelPadLargeObjects2.length = 0;
gdjs.testin_32stuffCode.GDTriggerObjects1.length = 0;
gdjs.testin_32stuffCode.GDTriggerObjects2.length = 0;

gdjs.testin_32stuffCode.eventsList0(runtimeScene);
gdjs.testin_32stuffCode.GDExitObjects1.length = 0;
gdjs.testin_32stuffCode.GDExitObjects2.length = 0;
gdjs.testin_32stuffCode.GDFinishObjects1.length = 0;
gdjs.testin_32stuffCode.GDFinishObjects2.length = 0;
gdjs.testin_32stuffCode.GDWallObjects1.length = 0;
gdjs.testin_32stuffCode.GDWallObjects2.length = 0;
gdjs.testin_32stuffCode.GDPlatform_9595horizObjects1.length = 0;
gdjs.testin_32stuffCode.GDPlatform_9595horizObjects2.length = 0;
gdjs.testin_32stuffCode.GDPlayerObjects1.length = 0;
gdjs.testin_32stuffCode.GDPlayerObjects2.length = 0;
gdjs.testin_32stuffCode.GDOperatorPlusBitmapText3Objects1.length = 0;
gdjs.testin_32stuffCode.GDOperatorPlusBitmapText3Objects2.length = 0;
gdjs.testin_32stuffCode.GDBtnUpObjects1.length = 0;
gdjs.testin_32stuffCode.GDBtnUpObjects2.length = 0;
gdjs.testin_32stuffCode.GDBtnLeftObjects1.length = 0;
gdjs.testin_32stuffCode.GDBtnLeftObjects2.length = 0;
gdjs.testin_32stuffCode.GDBtnRightObjects1.length = 0;
gdjs.testin_32stuffCode.GDBtnRightObjects2.length = 0;
gdjs.testin_32stuffCode.GDBtnDownObjects1.length = 0;
gdjs.testin_32stuffCode.GDBtnDownObjects2.length = 0;
gdjs.testin_32stuffCode.GDMobileExitObjects1.length = 0;
gdjs.testin_32stuffCode.GDMobileExitObjects2.length = 0;
gdjs.testin_32stuffCode.GDTimerBoxObjects1.length = 0;
gdjs.testin_32stuffCode.GDTimerBoxObjects2.length = 0;
gdjs.testin_32stuffCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.testin_32stuffCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.testin_32stuffCode.GDPoundThruObjects1.length = 0;
gdjs.testin_32stuffCode.GDPoundThruObjects2.length = 0;
gdjs.testin_32stuffCode.GDWalkthruWallObjects1.length = 0;
gdjs.testin_32stuffCode.GDWalkthruWallObjects2.length = 0;
gdjs.testin_32stuffCode.GDPlayer2Objects1.length = 0;
gdjs.testin_32stuffCode.GDPlayer2Objects2.length = 0;
gdjs.testin_32stuffCode.GDPlayer4Objects1.length = 0;
gdjs.testin_32stuffCode.GDPlayer4Objects2.length = 0;
gdjs.testin_32stuffCode.GDspikeObjects1.length = 0;
gdjs.testin_32stuffCode.GDspikeObjects2.length = 0;
gdjs.testin_32stuffCode.GDPadLargeObjects1.length = 0;
gdjs.testin_32stuffCode.GDPadLargeObjects2.length = 0;
gdjs.testin_32stuffCode.GDPadSmallObjects1.length = 0;
gdjs.testin_32stuffCode.GDPadSmallObjects2.length = 0;
gdjs.testin_32stuffCode.GDPadMedObjects1.length = 0;
gdjs.testin_32stuffCode.GDPadMedObjects2.length = 0;
gdjs.testin_32stuffCode.GDWalkthruPlatObjects1.length = 0;
gdjs.testin_32stuffCode.GDWalkthruPlatObjects2.length = 0;
gdjs.testin_32stuffCode.GDInvisKillObjects1.length = 0;
gdjs.testin_32stuffCode.GDInvisKillObjects2.length = 0;
gdjs.testin_32stuffCode.GDCelPadMedObjects1.length = 0;
gdjs.testin_32stuffCode.GDCelPadMedObjects2.length = 0;
gdjs.testin_32stuffCode.GDCelPadSmallObjects1.length = 0;
gdjs.testin_32stuffCode.GDCelPadSmallObjects2.length = 0;
gdjs.testin_32stuffCode.GDCelPadLargeObjects1.length = 0;
gdjs.testin_32stuffCode.GDCelPadLargeObjects2.length = 0;
gdjs.testin_32stuffCode.GDTriggerObjects1.length = 0;
gdjs.testin_32stuffCode.GDTriggerObjects2.length = 0;


return;

}

gdjs['testin_32stuffCode'] = gdjs.testin_32stuffCode;
