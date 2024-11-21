import { useSharedValue, useAnimatedProps } from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

export const useCanvasGesture = () => {
  // Shared value to store paths (each path is an array of [x, y] points)
  const pathPoints = useSharedValue<number[][]>([]);

  const animatedProps = useAnimatedProps(() => {
    // Convert each path to a valid SVG `d` string
    const paths = pathPoints.value.map(
      (path) =>
        /**
         * M is the SVG command to move the "pen" to the specified starting point
         * ${path[0]},${path[1]} are the first x and y coordinates of the path (starting point).
         */
        `M${path[0]},${path[1]} ` +
        path
          .slice(2)
          /**
           * The L command is used to draw straight lines between the current point to the point (x, y)
           */
          .map((point, index) => (index % 2 === 0 ? `L${point},` : `${point}`))
          .join(' '),
    );
    return {
      d: paths.join(' '), // Combine all paths into one string
    };
  });

  // Gesture handler for drawing paths
  const pan = Gesture.Pan()
    .onStart((event) => {
      // Add a new path with the initial point
      pathPoints.value = [...pathPoints.value, [event.x, event.y]];
    })
    .onUpdate((event) => {
      // Update the current path with new points
      const updatedPaths = [...pathPoints.value];
      const currentPath = updatedPaths[updatedPaths.length - 1];
      updatedPaths[updatedPaths.length - 1] = [...currentPath, event.x, event.y];
      pathPoints.value = updatedPaths;
    });

  const onUndo = () => {
    pathPoints.value = pathPoints.value.slice(0, -1);
  };

  const onRemoveEntirely = () => {
    pathPoints.value = [];
  };

  return { pan, animatedProps, onUndo, onRemoveEntirely };
};
