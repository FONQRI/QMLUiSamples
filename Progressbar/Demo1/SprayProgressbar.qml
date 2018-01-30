import QtQuick 2.10
import QtQuick.Window 2.10
import "Progress.js" as Pro
Canvas {
    id: canvas
    anchors.fill: parent


    Timer{
        interval: 1000/60
        running: true
        repeat: true
        onTriggered: canvas.requestPaint()

    }


    property  bool firstTime : true
    onWidthChanged:Pro.setSizes(canvas.width , canvas.height)
       onHeightChanged: Pro.setSizes(canvas.width , canvas.height)

    onPaint: {
        if(firstTime){
            Pro.setSizes(canvas.width , canvas.height)
            Pro.setCtx(canvas.getContext("2d"));
            Pro.setBar(new Pro.Progressbar())

            firstTime = false

        }
        Pro.draw();


    }
}
