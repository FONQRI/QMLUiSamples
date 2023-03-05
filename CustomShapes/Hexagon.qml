import QtQuick 2.15
import QtQuick.Shapes 1.15

Item {

	id:root

	property double edgeSize: 50
	property double h: Math.sqrt(Math.pow(edgeSize,2) - Math.pow(edgeSize/2 , 2))
	property color fColor:"transparent"
	property color tColor:"transparent"

	width : 2*h
	height : 2*edgeSize

	Shape{
		id:shapeRoot
		ShapePath {
			fillColor:root.fColor != root.tColor ? root.fColor:"#222"
			strokeWidth: 1
			strokeColor: root.tColor
			strokeStyle: ShapePath.SolidLine
			joinStyle: ShapePath.RoundJoin
			startX: root.h   ; startY: 0
			PathLine { x: 2*root.h ; y: root.edgeSize/2 }
			PathLine { x: 2*root.h ; y: root.edgeSize  *1.5 }
			PathLine { x: root.h ; y: root.edgeSize  * 2 }
			PathLine { x: 0 ; y: root.edgeSize  * 1.5 }
			PathLine { x: 0 ; y: root.edgeSize  * 0.5 }

			fillGradient:         LinearGradient  {
				x1: 0; y1: 0
				x2: root.width; y2: root.height
				GradientStop { position: 0; color: root.fColor != root.tColor ? root.fColor : "#FFEB3B" }
				GradientStop { position: 1; color: root.fColor != root.tColor ? root.fColor : "#FF9800" }
			}
		}
	}
}
