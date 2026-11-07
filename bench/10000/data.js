window.BENCHMARK_DATA = {
  "lastUpdate": 1794030239282,
  "repoUrl": "https://github.com/ehtick/instanced-mesh",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "devgargaro@gmail.com",
            "name": "Andrea Gargaro",
            "username": "agargaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56786de4651bf5d45d218d720bb09e95d765db93",
          "message": "Rewrite CPU benchmarks and strengthen PR performance regression checks (#169)\n\n* Rewrite CPU benchmarks and add conservative paired PR regression gate\n\n* Resolve PR static analysis findings in benchmark tooling\n\n* Parallelize benchmark shards and cache CI dependencies and Chromium\n\n* Scope benchmark CI permissions and clarify shard test ordering\n\n* Run CI benchmarks only with 10000 instances",
          "timestamp": "2026-10-06T12:03:12+02:00",
          "tree_id": "df3a3620755288ef4ea30d4e30810d8969552f6f",
          "url": "https://github.com/ehtick/instanced-mesh/commit/56786de4651bf5d45d218d720bb09e95d765db93"
        },
        "date": 1794030239209,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "instances/addInstances/identity/entities=false",
            "value": 3162.616200731508,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "924 samples, 0.316194 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/updateInstancesPosition/entities=false/sparse=false",
            "value": 1725.5874224008833,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "863 samples, 0.579513 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/updateInstancesPosition/entities=false/sparse=true",
            "value": 3368.348350596401,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "1685 samples, 0.296881 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/addInstances/identity/entities=true",
            "value": 291.4810009580031,
            "range": "±48.43%",
            "unit": "ops/sec",
            "extra": "139 samples, 3.430755 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/updateInstancesPosition/entities=true/sparse=false",
            "value": 1824.5446300815659,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "913 samples, 0.548082 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/updateInstancesPosition/entities=true/sparse=true",
            "value": 3415.0577104459385,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "1708 samples, 0.292821 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/addInstances",
            "value": 1230.7713267514691,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "490 samples, 0.812499 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/addInstances (growth)",
            "value": 825.1992495441353,
            "range": "±3.88%",
            "unit": "ops/sec",
            "extra": "370 samples, 1.211829 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/addInstances (entities)",
            "value": 269.87001622804496,
            "range": "±43.56%",
            "unit": "ops/sec",
            "extra": "129 samples, 3.705488 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/removeInstances",
            "value": 6530.30456416402,
            "range": "±26.84%",
            "unit": "ops/sec",
            "extra": "438 samples, 0.153132 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/updateInstances",
            "value": 2711.3322585139267,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "1356 samples, 0.368822 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/updateInstancesPosition",
            "value": 3511.625920537663,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "1756 samples, 0.284768 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "instances/updateInstances (entities)",
            "value": 3189.452109537406,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "1595 samples, 0.313533 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "matrices/setMatrixAt",
            "value": 3596.634753414618,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "1799 samples, 0.278038 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "matrices/getMatrixAt",
            "value": 4248.847015878779,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "2125 samples, 0.235358 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "matrices/getPositionAt",
            "value": 7611.172315457006,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "3806 samples, 0.131386 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "matrices/resizeBuffers (+50%)",
            "value": 3120.6020483532056,
            "range": "±13.39%",
            "unit": "ops/sec",
            "extra": "332 samples, 0.320451 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/computeBVH/sphere=false/margin=0",
            "value": 128.3971049804699,
            "range": "±20.42%",
            "unit": "ops/sec",
            "extra": "57 samples, 7.788338 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/computeBVH/sphere=false/margin=1",
            "value": 115.69686616526663,
            "range": "±21.81%",
            "unit": "ops/sec",
            "extra": "52 samples, 8.643276 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/computeBVH/sphere=true/margin=0",
            "value": 127.70713729671387,
            "range": "±24.68%",
            "unit": "ops/sec",
            "extra": "57 samples, 7.830416 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/computeBVH/sphere=true/margin=1",
            "value": 127.33948234177416,
            "range": "±20.46%",
            "unit": "ops/sec",
            "extra": "58 samples, 7.853024 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/addInstances/insert",
            "value": 22.013331830969413,
            "range": "±6.88%",
            "unit": "ops/sec",
            "extra": "32 samples, 45.427017 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/removeInstances/delete",
            "value": 555.602399279553,
            "range": "±7.49%",
            "unit": "ops/sec",
            "extra": "46 samples, 1.799848 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/updateInstancesPosition/move/margin=0",
            "value": 33.59399667720686,
            "range": "±3.49%",
            "unit": "ops/sec",
            "extra": "32 samples, 29.767223 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/setMatrixAt/stationary/margin=0",
            "value": 494.0089644028424,
            "range": "±8.13%",
            "unit": "ops/sec",
            "extra": "51 samples, 2.024255 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/setMatrixAt/relocation/margin=0",
            "value": 33.321494310533716,
            "range": "±8.71%",
            "unit": "ops/sec",
            "extra": "32 samples, 30.010659 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/updateInstancesPosition/move/margin=1",
            "value": 529.7811034314049,
            "range": "±5.92%",
            "unit": "ops/sec",
            "extra": "46 samples, 1.887572 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/setMatrixAt/stationary/margin=1",
            "value": 498.3141662633361,
            "range": "±7.07%",
            "unit": "ops/sec",
            "extra": "54 samples, 2.006766 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/setMatrixAt/relocation/margin=1",
            "value": 34.58686385096083,
            "range": "±7.00%",
            "unit": "ops/sec",
            "extra": "32 samples, 28.912711 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/all/none",
            "value": 3388.720757913692,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "1695 samples, 0.295097 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/all/opaque",
            "value": 342.158181668935,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "172 samples, 2.922625 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/all/transparent",
            "value": 343.584409196053,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "173 samples, 2.910493 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/all/radix",
            "value": 701.2150192371168,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "351 samples, 1.426096 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/partial/none",
            "value": 5177.14989127525,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "2589 samples, 0.193156 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/partial/opaque",
            "value": 1498.8449810647962,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "750 samples, 0.667180 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/partial/transparent",
            "value": 1531.9948708811964,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "766 samples, 0.652744 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/partial/radix",
            "value": 2522.9940923469776,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "1262 samples, 0.396354 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/none/none",
            "value": 6790.529578724278,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "3396 samples, 0.147264 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/none/opaque",
            "value": 6772.441390340896,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "3387 samples, 0.147657 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/none/transparent",
            "value": 6779.864389154714,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "3390 samples, 0.147496 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/none/radix",
            "value": 6688.9825923698945,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "3345 samples, 0.149500 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/sparse/none",
            "value": 6265.850672247192,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "3133 samples, 0.159595 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/sparse/opaque",
            "value": 712.9244764314577,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "357 samples, 1.402673 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/sparse/transparent",
            "value": 713.9655997095178,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "357 samples, 1.400628 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/linear/sparse/radix",
            "value": 1066.4549669677383,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "534 samples, 0.937686 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/all/none",
            "value": 3056.998826769121,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "1529 samples, 0.327118 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/all/opaque",
            "value": 299.3139347480105,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "150 samples, 3.340974 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/all/transparent",
            "value": 311.3400990929756,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "156 samples, 3.211922 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/all/radix",
            "value": 582.4645326275054,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "292 samples, 1.716843 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/partial/none",
            "value": 9323.07270853905,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "4662 samples, 0.107261 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/partial/opaque",
            "value": 1768.71042968799,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "885 samples, 0.565384 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/partial/transparent",
            "value": 1869.9100165345365,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "936 samples, 0.534785 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/partial/radix",
            "value": 2931.083866289671,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "1466 samples, 0.341171 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/none/none",
            "value": 4947431.70317601,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "2473716 samples, 0.000202 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/none/opaque",
            "value": 2378632.5727944304,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "1189317 samples, 0.000420 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/none/transparent",
            "value": 2379593.9904438537,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "1189797 samples, 0.000420 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/none/radix",
            "value": 722560.3944719232,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "361281 samples, 0.001384 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/sparse/none",
            "value": 3802.218280513723,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "1902 samples, 0.263004 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/sparse/opaque",
            "value": 600.1807190005691,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "301 samples, 1.666165 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/sparse/transparent",
            "value": 624.05993744398,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "313 samples, 1.602410 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/bvh/sparse/radix",
            "value": 871.7474408182585,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "436 samples, 1.147121 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/transformed/nonCentered/callback",
            "value": 3062.529961118788,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "1532 samples, 0.326527 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lod/linear/screen/sort=false/shadow=false",
            "value": 2258.663584895733,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "1130 samples, 0.442740 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lod/linear/screen/sort=false/shadow=true",
            "value": 2381.8587224326757,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "1191 samples, 0.419840 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lod/linear/distance/sort=false/shadow=false",
            "value": 1200.4174488629237,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "601 samples, 0.833044 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lod/linear/distance/sort=false/shadow=true",
            "value": 1464.0178983757269,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "733 samples, 0.683052 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lod/bvh/screen/sort=false/shadow=false",
            "value": 1580.6402289526332,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "791 samples, 0.632655 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lod/bvh/screen/sort=false/shadow=true",
            "value": 1692.4309405052807,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "847 samples, 0.590866 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lod/bvh/distance/sort=false/shadow=false",
            "value": 2419.6409301250615,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "1210 samples, 0.413284 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lod/bvh/distance/sort=false/shadow=true",
            "value": 3286.9968545780393,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "1644 samples, 0.304229 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/updateIndexArray/dirty=false",
            "value": 8174.622650558943,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "4080 samples, 0.122330 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/updateIndexArray/dirty=true",
            "value": 35344.10506583872,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "17524 samples, 0.028293 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/sortWithoutCulling",
            "value": 355.42935816544275,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "178 samples, 2.813499 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/empty",
            "value": 7330.380528354104,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "3666 samples, 0.136419 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lod/getObjectLODIndex",
            "value": 2164.896755622742,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "1083 samples, 0.461916 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/random/transparent=false",
            "value": 1101.0634973399722,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "393 samples, 0.908213 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/sorted/transparent=false",
            "value": 1506.5928170398852,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "523 samples, 0.663749 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/reverse/transparent=false",
            "value": 1490.9488716919434,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "519 samples, 0.670714 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/duplicates/transparent=false",
            "value": 1513.8987153226717,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "514 samples, 0.660546 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/equal/transparent=false",
            "value": 1764.7364914023615,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "580 samples, 0.566657 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/random/transparent=true",
            "value": 1047.105613946233,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "380 samples, 0.955014 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/sorted/transparent=true",
            "value": 1528.85527569274,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "528 samples, 0.654084 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/reverse/transparent=true",
            "value": 1562.111844659549,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "537 samples, 0.640159 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/duplicates/transparent=true",
            "value": 1471.7381256878205,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "507 samples, 0.679469 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/radix/equal/transparent=true",
            "value": 1778.556064453597,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "585 samples, 0.562254 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/getPositionAndMaxScaleOnAxisAt",
            "value": 3518.5871468796713,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "1757 samples, 0.284205 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/getMaxScaleOnAxisAt",
            "value": 3707.4879348640534,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "1851 samples, 0.269724 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/applyMatrixAtToSphere",
            "value": 3456.594484649506,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "1726 samples, 0.289302 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/copyTo",
            "value": 915.0462472965486,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "458 samples, 1.092841 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/setVisibilityAt",
            "value": 7858.428357366349,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "3922 samples, 0.127252 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/getVisibilityAt",
            "value": 6609.228756915155,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "3300 samples, 0.151304 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/setActiveAt",
            "value": 7985.580245822159,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "3986 samples, 0.125226 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/getActiveAt",
            "value": 6607.876753742693,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "3299 samples, 0.151335 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/setActiveAndVisibilityAt",
            "value": 7644.2410682226555,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "3815 samples, 0.130817 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/getActiveAndVisibilityAt",
            "value": 6265.878853922419,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "3129 samples, 0.159595 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/setColorAt",
            "value": 5683.928113452494,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "2838 samples, 0.175935 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/setColorAt/hex",
            "value": 966.8887644120324,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "484 samples, 1.034245 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/getColorAt",
            "value": 7700.368300762846,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "3844 samples, 0.129864 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/setOpacityAt",
            "value": 5885.257746935522,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "2939 samples, 0.169916 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/getOpacityAt",
            "value": 4948.451559384654,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "2470 samples, 0.202083 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/getMatrixAt/defaultTarget",
            "value": 4237.8934434695475,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "2116 samples, 0.235966 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "access/getPositionAt/defaultTarget",
            "value": 7596.788618594795,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "3787 samples, 0.131635 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/getUniformAt/float",
            "value": 4375.334949094478,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "2188 samples, 0.228554 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/setUniformAt/float",
            "value": 3339.381900444914,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "1670 samples, 0.299457 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/getUniformAt/vec2",
            "value": 2889.6856542148366,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "1445 samples, 0.346058 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/setUniformAt/vec2",
            "value": 2427.1992378458544,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "1214 samples, 0.411997 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/getUniformAt/vec3",
            "value": 2795.6016938545863,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "1398 samples, 0.357705 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/setUniformAt/vec3",
            "value": 2426.1375754895553,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "1214 samples, 0.412178 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/getUniformAt/vec4",
            "value": 2213.4090596219917,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "1107 samples, 0.451792 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/setUniformAt/vec4",
            "value": 2389.440211505766,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "1195 samples, 0.418508 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/getUniformAt/mat3",
            "value": 2201.7916620694077,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "1101 samples, 0.454176 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/setUniformAt/mat3",
            "value": 2014.7433682951926,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "1008 samples, 0.496341 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/getUniformAt/mat4",
            "value": 1836.7995229358621,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "919 samples, 0.544425 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "uniforms/setUniformAt/mat4",
            "value": 1958.3809790277085,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "980 samples, 0.510626 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "morph/getMorphAt/4-targets",
            "value": 5358.844075899784,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "2680 samples, 0.186607 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "morph/setMorphAt/4-targets",
            "value": 1570.7098189542287,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "786 samples, 0.636655 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "skeleton/setBonesAt/16-bones/update=false",
            "value": 194.8607559437313,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "98 samples, 5.131870 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "skeleton/setBonesAt/16-bones/update=true",
            "value": 92.56100204776202,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "47 samples, 10.803686 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bounds/computeBoundingBox/first-call",
            "value": 546.9909620837437,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "175 samples, 1.828184 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bounds/computeBoundingSphere/first-call",
            "value": 1304.274756679891,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "272 samples, 0.766710 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bounds/computeBoundingBox/dense",
            "value": 564.7906251303133,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "283 samples, 1.770568 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bounds/computeBoundingSphere/dense",
            "value": 1355.6389337038358,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "678 samples, 0.737660 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bounds/computeBoundingBox/sparse",
            "value": 1094.7448924966106,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "548 samples, 0.913455 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bounds/computeBoundingSphere/sparse",
            "value": 2665.3048351928906,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "1333 samples, 0.375192 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "raycast/linear/miss",
            "value": 4748482.40051526,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "992486 samples, 0.000211 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "raycast/linear/hit",
            "value": 1014.2873942759715,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "507 samples, 0.985914 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "raycast/bvh/miss",
            "value": 4298587.685972379,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "929001 samples, 0.000233 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "raycast/bvh/hit",
            "value": 164328.89241690587,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "77881 samples, 0.006085 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/query/raycast",
            "value": 561079.4642651106,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "248261 samples, 0.001782 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/query/intersectBox",
            "value": 28963.870949995035,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "14332 samples, 0.034526 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/setMatrixIdentity/bvh=false",
            "value": 3540.7420875511666,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "1768 samples, 0.282427 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/updateMatrix/bvh=false",
            "value": 3167.6954398325897,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "1582 samples, 0.315687 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/updateMatrixPosition/bvh=false",
            "value": 4094.4985096101686,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "2044 samples, 0.244230 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/copyTo/bvh=false",
            "value": 1779.8788650045608,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "890 samples, 0.561836 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/applyMatrix4/bvh=false",
            "value": 1018.2501255284559,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "464 samples, 0.982077 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/applyQuaternion/bvh=false",
            "value": 5472.5975356454655,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "1857 samples, 0.182729 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/rotateOnAxis/bvh=false",
            "value": 5134.475117837568,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "1765 samples, 0.194762 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/rotateOnWorldAxis/bvh=false",
            "value": 5144.321564724864,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "1764 samples, 0.194389 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/rotateX/bvh=false",
            "value": 5143.135781454813,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "1768 samples, 0.194434 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/rotateY/bvh=false",
            "value": 5160.463582416906,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "1774 samples, 0.193781 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/rotateZ/bvh=false",
            "value": 5146.614492400407,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "1773 samples, 0.194302 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/translateOnAxis/bvh=false",
            "value": 4124.357411952563,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "1551 samples, 0.242462 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/translateX/bvh=false",
            "value": 4439.6041924527235,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "1630 samples, 0.225245 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/translateY/bvh=false",
            "value": 4445.16815092429,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "1629 samples, 0.224963 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/translateZ/bvh=false",
            "value": 4445.638779430232,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "1631 samples, 0.224940 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/matrix/bvh=false",
            "value": 2379.8133559036282,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "1189 samples, 0.420201 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/matrixWorld/bvh=false",
            "value": 1558.0379195268217,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "779 samples, 0.641833 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/visible/get/bvh=false",
            "value": 5836.225753584531,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "2911 samples, 0.171344 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/visible/set/bvh=false",
            "value": 6177.366631914883,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "3081 samples, 0.161881 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/active/get/bvh=false",
            "value": 5810.0442279745275,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "2897 samples, 0.172116 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/active/set/bvh=false",
            "value": 6889.68810430332,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "3434 samples, 0.145144 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/color/get/bvh=false",
            "value": 3814.889673799116,
            "range": "±5.61%",
            "unit": "ops/sec",
            "extra": "1905 samples, 0.262131 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/color/set/bvh=false",
            "value": 4478.653331501018,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "2235 samples, 0.223281 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/opacity/get/bvh=false",
            "value": 4324.923129353429,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "2159 samples, 0.231218 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/opacity/set/bvh=false",
            "value": 4466.01862926244,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "2229 samples, 0.223913 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/getUniform/bvh=false",
            "value": 3861.019201410239,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "1928 samples, 0.258999 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/setUniform/bvh=false",
            "value": 3598.3460247518046,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "1797 samples, 0.277905 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/morph/set/bvh=false",
            "value": 1328.393887384913,
            "range": "±11.61%",
            "unit": "ops/sec",
            "extra": "664 samples, 0.752789 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/updateBones/bvh=false",
            "value": 195.49352592969413,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "98 samples, 5.115259 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/updateMatrix/bvh=true",
            "value": 1077.363836047426,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "539 samples, 0.928192 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/updateMatrixPosition/bvh=true",
            "value": 1128.2799330205855,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "564 samples, 0.886305 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "entity/remove",
            "value": 3654.949094391792,
            "range": "±5.95%",
            "unit": "ops/sec",
            "extra": "119 samples, 0.273602 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/constructor",
            "value": 3862.6834716184744,
            "range": "±30.27%",
            "unit": "ops/sec",
            "extra": "372 samples, 0.258887 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/clearInstances",
            "value": 905686.3770981953,
            "range": "±17.23%",
            "unit": "ops/sec",
            "extra": "489 samples, 0.001104 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/addInstances/reuse",
            "value": 2506.3847957579655,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "314 samples, 0.398981 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/initUniformsPerInstance",
            "value": 11325.436386396466,
            "range": "±24.34%",
            "unit": "ops/sec",
            "extra": "402 samples, 0.088297 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/initSkeleton",
            "value": 1062.8642302856483,
            "range": "±23.80%",
            "unit": "ops/sec",
            "extra": "204 samples, 0.940854 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/resizeBuffers/allTextures",
            "value": 237.87682327759677,
            "range": "±16.66%",
            "unit": "ops/sec",
            "extra": "32 samples, 4.203856 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/bvh/insertRange",
            "value": 24.27316747786025,
            "range": "±3.57%",
            "unit": "ops/sec",
            "extra": "32 samples, 41.197755 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/bvh/insert",
            "value": 23.28867384916679,
            "range": "±5.44%",
            "unit": "ops/sec",
            "extra": "32 samples, 42.939328 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/bvh/delete",
            "value": 705.8525314704433,
            "range": "±7.66%",
            "unit": "ops/sec",
            "extra": "52 samples, 1.416727 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/bvh/clear",
            "value": 51968.22826322792,
            "range": "±20.68%",
            "unit": "ops/sec",
            "extra": "57 samples, 0.019243 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/bvh/create",
            "value": 124.06639504628801,
            "range": "±29.09%",
            "unit": "ops/sec",
            "extra": "32 samples, 8.060200 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/move/relocation",
            "value": 40.262750836669156,
            "range": "±5.98%",
            "unit": "ops/sec",
            "extra": "32 samples, 24.836852 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/computeBVH/sphere=false/sparse",
            "value": 207.78770456879272,
            "range": "±19.41%",
            "unit": "ops/sec",
            "extra": "84 samples, 4.812604 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/computeBVH/sphere=true/sparse",
            "value": 191.61614181554637,
            "range": "±20.89%",
            "unit": "ops/sec",
            "extra": "79 samples, 5.218767 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/frustumCulling/margin/accurate=false",
            "value": 4419.181355303866,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "2206 samples, 0.226286 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "bvh/frustumCulling/margin/accurate=true",
            "value": 3518.639403464724,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "1757 samples, 0.284201 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "texture/enqueueUpdate/partial=false",
            "value": 8331.214033474096,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "4147 samples, 0.120031 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "texture/enqueueUpdate/partial=true",
            "value": 4993.5170411614945,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "2490 samples, 0.200260 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/frustumCullingAlreadyPerformed/cached=false",
            "value": 7526.660480230887,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "3764 samples, 0.132861 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/frustumCullingAlreadyPerformed/cached=true",
            "value": 7397.11404765381,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "3699 samples, 0.135188 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "matrices/updateMatrixWorld",
            "value": 2791.069602531967,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "1396 samples, 0.358286 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "sorting/createRadixSort/factory",
            "value": 46260.79810517567,
            "range": "±24.47%",
            "unit": "ops/sec",
            "extra": "23132 samples, 0.021617 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/createInstancedMesh2From/colors=false",
            "value": 2137.9262030317846,
            "range": "±8.90%",
            "unit": "ops/sec",
            "extra": "1070 samples, 0.467743 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "lifecycle/createInstancedMesh2From/colors=true",
            "value": 1645.5747242513237,
            "range": "±8.68%",
            "unit": "ops/sec",
            "extra": "823 samples, 0.607690 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          },
          {
            "name": "frustum/movingCamera",
            "value": 3381.787308450525,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "1682 samples, 0.295702 ms/batch; count=10000; Node=v24.22.2; linux/x64"
          }
        ]
      }
    ]
  }
}