import { radixSort } from "three/examples/jsm/utils/SortUtils";
import { InstancedMesh2 } from "../objects/InstancedMesh2";
import { InstancedRenderItem } from "../objects/InstancedRenderList";

export function createRadixSort(target: InstancedMesh2) { // TODO add type

    const options = {
        get: el => el.depth,
        aux: new Array(target.maxCount),
        reversed: null
    };

    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_mesh_batch.html#L291
    return function sortFunction(list: InstancedRenderItem[]): void {
        options.reversed = target.material.transparent;

        let minZ = Infinity;
        let maxZ = - Infinity;

        for (const { depth } of list) {
            if (depth > maxZ) maxZ = depth;
            if (depth < minZ) minZ = depth;
        }

        const depthDelta = maxZ - minZ;
        const factor = (2 ** 32 - 1) / depthDelta;

        for (const item of list) {
            item.depth = (item.depth - minZ) * factor;
        }

        radixSort(list, options);
    }
}