gdjs.Level_321Code = {};
gdjs.Level_321Code.localVariables = [];
gdjs.Level_321Code.idToCallbackMap = new Map();
gdjs.Level_321Code.GDTimerTextObjects1= [];
gdjs.Level_321Code.GDTimerTextObjects2= [];
gdjs.Level_321Code.GDOperatorPlusBitmapTextObjects1= [];
gdjs.Level_321Code.GDOperatorPlusBitmapTextObjects2= [];
gdjs.Level_321Code.GDOperatorPlusBitmapText2Objects1= [];
gdjs.Level_321Code.GDOperatorPlusBitmapText2Objects2= [];
gdjs.Level_321Code.GDNotJamOldStyle11Objects1= [];
gdjs.Level_321Code.GDNotJamOldStyle11Objects2= [];
gdjs.Level_321Code.GDExitObjects1= [];
gdjs.Level_321Code.GDExitObjects2= [];
gdjs.Level_321Code.GDFinishObjects1= [];
gdjs.Level_321Code.GDFinishObjects2= [];
gdjs.Level_321Code.GDWallObjects1= [];
gdjs.Level_321Code.GDWallObjects2= [];
gdjs.Level_321Code.GDPlatform_9595horizObjects1= [];
gdjs.Level_321Code.GDPlatform_9595horizObjects2= [];
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDOperatorPlusBitmapText3Objects1= [];
gdjs.Level_321Code.GDOperatorPlusBitmapText3Objects2= [];
gdjs.Level_321Code.GDBtnUpObjects1= [];
gdjs.Level_321Code.GDBtnUpObjects2= [];
gdjs.Level_321Code.GDBtnLeftObjects1= [];
gdjs.Level_321Code.GDBtnLeftObjects2= [];
gdjs.Level_321Code.GDBtnRightObjects1= [];
gdjs.Level_321Code.GDBtnRightObjects2= [];
gdjs.Level_321Code.GDBtnDownObjects1= [];
gdjs.Level_321Code.GDBtnDownObjects2= [];
gdjs.Level_321Code.GDMobileExitObjects1= [];
gdjs.Level_321Code.GDMobileExitObjects2= [];
gdjs.Level_321Code.GDTimerBoxObjects1= [];
gdjs.Level_321Code.GDTimerBoxObjects2= [];
gdjs.Level_321Code.GDNewTiledSpriteObjects1= [];
gdjs.Level_321Code.GDNewTiledSpriteObjects2= [];
gdjs.Level_321Code.GDPoundThruObjects1= [];
gdjs.Level_321Code.GDPoundThruObjects2= [];
gdjs.Level_321Code.GDWalkthruWallObjects1= [];
gdjs.Level_321Code.GDWalkthruWallObjects2= [];
gdjs.Level_321Code.GDPlayer2Objects1= [];
gdjs.Level_321Code.GDPlayer2Objects2= [];
gdjs.Level_321Code.GDPlayer4Objects1= [];
gdjs.Level_321Code.GDPlayer4Objects2= [];
gdjs.Level_321Code.GDspikeObjects1= [];
gdjs.Level_321Code.GDspikeObjects2= [];
gdjs.Level_321Code.GDPadLargeObjects1= [];
gdjs.Level_321Code.GDPadLargeObjects2= [];
gdjs.Level_321Code.GDPadSmallObjects1= [];
gdjs.Level_321Code.GDPadSmallObjects2= [];
gdjs.Level_321Code.GDPadMedObjects1= [];
gdjs.Level_321Code.GDPadMedObjects2= [];
gdjs.Level_321Code.GDWalkthruPlatObjects1= [];
gdjs.Level_321Code.GDWalkthruPlatObjects2= [];
gdjs.Level_321Code.GDInvisKillObjects1= [];
gdjs.Level_321Code.GDInvisKillObjects2= [];
gdjs.Level_321Code.GDCelPadMedObjects1= [];
gdjs.Level_321Code.GDCelPadMedObjects2= [];
gdjs.Level_321Code.GDCelPadSmallObjects1= [];
gdjs.Level_321Code.GDCelPadSmallObjects2= [];
gdjs.Level_321Code.GDCelPadLargeObjects1= [];
gdjs.Level_321Code.GDCelPadLargeObjects2= [];
gdjs.Level_321Code.GDTriggerObjects1= [];
gdjs.Level_321Code.GDTriggerObjects2= [];


gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlatform_95959595horizObjects1Objects = Hashtable.newFrom({"Platform_horiz": gdjs.Level_321Code.GDPlatform_9595horizObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDFinishObjects1Objects = Hashtable.newFrom({"Finish": gdjs.Level_321Code.GDFinishObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDFinishObjects1Objects = Hashtable.newFrom({"Finish": gdjs.Level_321Code.GDFinishObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.Level_321Code.GDExitObjects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17533340);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableBoolean(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(15000);
}
}
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCurrentSpeed(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform_horiz"), gdjs.Level_321Code.GDPlatform_9595horizObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlatform_95959595horizObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableBoolean(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(2000);
}
}
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.Level_321Code.GDTimerTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(Math.floor(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() / 60));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 60)));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
{for(var i = 0, len = gdjs.Level_321Code.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTimerTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) + ":" + (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.Level_321Code.GDFinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDFinishObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 50);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17541524);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()), false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Finish"), gdjs.Level_321Code.GDFinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDFinishObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 50);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17543564);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End Scene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 10);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("0" + (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Level_321Code.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDExitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17545716);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getY() >= 1000 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setPosition(331,326);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17547444);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MobileUI");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDTimerTextObjects1.length = 0;
gdjs.Level_321Code.GDTimerTextObjects2.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapTextObjects1.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapTextObjects2.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapText2Objects1.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapText2Objects2.length = 0;
gdjs.Level_321Code.GDNotJamOldStyle11Objects1.length = 0;
gdjs.Level_321Code.GDNotJamOldStyle11Objects2.length = 0;
gdjs.Level_321Code.GDExitObjects1.length = 0;
gdjs.Level_321Code.GDExitObjects2.length = 0;
gdjs.Level_321Code.GDFinishObjects1.length = 0;
gdjs.Level_321Code.GDFinishObjects2.length = 0;
gdjs.Level_321Code.GDWallObjects1.length = 0;
gdjs.Level_321Code.GDWallObjects2.length = 0;
gdjs.Level_321Code.GDPlatform_9595horizObjects1.length = 0;
gdjs.Level_321Code.GDPlatform_9595horizObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapText3Objects1.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapText3Objects2.length = 0;
gdjs.Level_321Code.GDBtnUpObjects1.length = 0;
gdjs.Level_321Code.GDBtnUpObjects2.length = 0;
gdjs.Level_321Code.GDBtnLeftObjects1.length = 0;
gdjs.Level_321Code.GDBtnLeftObjects2.length = 0;
gdjs.Level_321Code.GDBtnRightObjects1.length = 0;
gdjs.Level_321Code.GDBtnRightObjects2.length = 0;
gdjs.Level_321Code.GDBtnDownObjects1.length = 0;
gdjs.Level_321Code.GDBtnDownObjects2.length = 0;
gdjs.Level_321Code.GDMobileExitObjects1.length = 0;
gdjs.Level_321Code.GDMobileExitObjects2.length = 0;
gdjs.Level_321Code.GDTimerBoxObjects1.length = 0;
gdjs.Level_321Code.GDTimerBoxObjects2.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_321Code.GDPoundThruObjects1.length = 0;
gdjs.Level_321Code.GDPoundThruObjects2.length = 0;
gdjs.Level_321Code.GDWalkthruWallObjects1.length = 0;
gdjs.Level_321Code.GDWalkthruWallObjects2.length = 0;
gdjs.Level_321Code.GDPlayer2Objects1.length = 0;
gdjs.Level_321Code.GDPlayer2Objects2.length = 0;
gdjs.Level_321Code.GDPlayer4Objects1.length = 0;
gdjs.Level_321Code.GDPlayer4Objects2.length = 0;
gdjs.Level_321Code.GDspikeObjects1.length = 0;
gdjs.Level_321Code.GDspikeObjects2.length = 0;
gdjs.Level_321Code.GDPadLargeObjects1.length = 0;
gdjs.Level_321Code.GDPadLargeObjects2.length = 0;
gdjs.Level_321Code.GDPadSmallObjects1.length = 0;
gdjs.Level_321Code.GDPadSmallObjects2.length = 0;
gdjs.Level_321Code.GDPadMedObjects1.length = 0;
gdjs.Level_321Code.GDPadMedObjects2.length = 0;
gdjs.Level_321Code.GDWalkthruPlatObjects1.length = 0;
gdjs.Level_321Code.GDWalkthruPlatObjects2.length = 0;
gdjs.Level_321Code.GDInvisKillObjects1.length = 0;
gdjs.Level_321Code.GDInvisKillObjects2.length = 0;
gdjs.Level_321Code.GDCelPadMedObjects1.length = 0;
gdjs.Level_321Code.GDCelPadMedObjects2.length = 0;
gdjs.Level_321Code.GDCelPadSmallObjects1.length = 0;
gdjs.Level_321Code.GDCelPadSmallObjects2.length = 0;
gdjs.Level_321Code.GDCelPadLargeObjects1.length = 0;
gdjs.Level_321Code.GDCelPadLargeObjects2.length = 0;
gdjs.Level_321Code.GDTriggerObjects1.length = 0;
gdjs.Level_321Code.GDTriggerObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);
gdjs.Level_321Code.GDTimerTextObjects1.length = 0;
gdjs.Level_321Code.GDTimerTextObjects2.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapTextObjects1.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapTextObjects2.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapText2Objects1.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapText2Objects2.length = 0;
gdjs.Level_321Code.GDNotJamOldStyle11Objects1.length = 0;
gdjs.Level_321Code.GDNotJamOldStyle11Objects2.length = 0;
gdjs.Level_321Code.GDExitObjects1.length = 0;
gdjs.Level_321Code.GDExitObjects2.length = 0;
gdjs.Level_321Code.GDFinishObjects1.length = 0;
gdjs.Level_321Code.GDFinishObjects2.length = 0;
gdjs.Level_321Code.GDWallObjects1.length = 0;
gdjs.Level_321Code.GDWallObjects2.length = 0;
gdjs.Level_321Code.GDPlatform_9595horizObjects1.length = 0;
gdjs.Level_321Code.GDPlatform_9595horizObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapText3Objects1.length = 0;
gdjs.Level_321Code.GDOperatorPlusBitmapText3Objects2.length = 0;
gdjs.Level_321Code.GDBtnUpObjects1.length = 0;
gdjs.Level_321Code.GDBtnUpObjects2.length = 0;
gdjs.Level_321Code.GDBtnLeftObjects1.length = 0;
gdjs.Level_321Code.GDBtnLeftObjects2.length = 0;
gdjs.Level_321Code.GDBtnRightObjects1.length = 0;
gdjs.Level_321Code.GDBtnRightObjects2.length = 0;
gdjs.Level_321Code.GDBtnDownObjects1.length = 0;
gdjs.Level_321Code.GDBtnDownObjects2.length = 0;
gdjs.Level_321Code.GDMobileExitObjects1.length = 0;
gdjs.Level_321Code.GDMobileExitObjects2.length = 0;
gdjs.Level_321Code.GDTimerBoxObjects1.length = 0;
gdjs.Level_321Code.GDTimerBoxObjects2.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_321Code.GDPoundThruObjects1.length = 0;
gdjs.Level_321Code.GDPoundThruObjects2.length = 0;
gdjs.Level_321Code.GDWalkthruWallObjects1.length = 0;
gdjs.Level_321Code.GDWalkthruWallObjects2.length = 0;
gdjs.Level_321Code.GDPlayer2Objects1.length = 0;
gdjs.Level_321Code.GDPlayer2Objects2.length = 0;
gdjs.Level_321Code.GDPlayer4Objects1.length = 0;
gdjs.Level_321Code.GDPlayer4Objects2.length = 0;
gdjs.Level_321Code.GDspikeObjects1.length = 0;
gdjs.Level_321Code.GDspikeObjects2.length = 0;
gdjs.Level_321Code.GDPadLargeObjects1.length = 0;
gdjs.Level_321Code.GDPadLargeObjects2.length = 0;
gdjs.Level_321Code.GDPadSmallObjects1.length = 0;
gdjs.Level_321Code.GDPadSmallObjects2.length = 0;
gdjs.Level_321Code.GDPadMedObjects1.length = 0;
gdjs.Level_321Code.GDPadMedObjects2.length = 0;
gdjs.Level_321Code.GDWalkthruPlatObjects1.length = 0;
gdjs.Level_321Code.GDWalkthruPlatObjects2.length = 0;
gdjs.Level_321Code.GDInvisKillObjects1.length = 0;
gdjs.Level_321Code.GDInvisKillObjects2.length = 0;
gdjs.Level_321Code.GDCelPadMedObjects1.length = 0;
gdjs.Level_321Code.GDCelPadMedObjects2.length = 0;
gdjs.Level_321Code.GDCelPadSmallObjects1.length = 0;
gdjs.Level_321Code.GDCelPadSmallObjects2.length = 0;
gdjs.Level_321Code.GDCelPadLargeObjects1.length = 0;
gdjs.Level_321Code.GDCelPadLargeObjects2.length = 0;
gdjs.Level_321Code.GDTriggerObjects1.length = 0;
gdjs.Level_321Code.GDTriggerObjects2.length = 0;


return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
