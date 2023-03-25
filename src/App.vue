<template>
  <div id="app">
    <div
      style="
        height: 10800px;
        width: 1200px;
        border: 1px solid green;
        position: relative;
        margin: 0 auto;
      "
    >
      <!-- <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="1"
        @refLineParams="getRefLineParams"
        class="test1">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        :x="210"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="1"
        @refLineParams="getRefLineParams"
        class="test2">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        :x="420"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="1"
        @refLineParams="getRefLineParams"
        class="test3">
      </vue-draggable-resizable>
      <span class="ref-line v-line"
            v-for="item in vLine"
            :key="item.id"
            v-show="item.display"
            :style="{ left: item.position, top: item.origin, height: item.lineLength}"
      />
      <span class="ref-line h-line"
            v-for="item in hLine"
            :key="item.id"
            v-show="item.display"
            :style="{ top: item.position, left: item.origin, width: item.lineLength}"
      /> -->
      <vue-draggable-resizable
        v-for="(item, index) in arr"
        :key="index"
        :w.sync="item.w"
        :h.sync="item.h"
        :x.sync="item.x"
        :y.sync="item.y"
        :isConflictCheck="true"
        :parent="true"
        :order="'1'"
        :id="item.id"
        :uniqueKey="item.uniqueKey"
      >
        <vue-draggable-resizable
          v-for="(i, ind) in item.children"
          :key="ind"
          :w.sync="i.w"
          :h.sync="i.h"
          :x.sync="i.x"
          :y.sync="i.y"
          :isConflictCheck="true"
          :parent="true"
          :id="i.id"
          @dragstop="eleDragged"
        >
          子框1
        </vue-draggable-resizable>
      </vue-draggable-resizable>
      <button @click="log">log</button>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from "./components/vue-draggable-resizable";
import Vue from "vue";
export default {
  name: "app",
  components: {
    VueDraggableResizable,
  },
  data() {
    return {
      vLine: [],
      hLine: [],
      // arr: [{
      //   id: '1',
      //   uniqueKey: '1590753224242oqgomgkv7tp',
      //   w: 1000,
      //   h: 200,
      //   x: 10,
      //   y: 30,
      //   children: [{
      //     id: '11',
      //     w: 200,
      //     h: 100,
      //     x: 300,
      //     y: 20
      //   }, {
      //     id: '12',
      //     w: 400,
      //     h: 100,
      //     x: 500,
      //     y: 50
      //   }]
      // }, {
      //   id: '2',
      //   uniqueKey: '1590753224242oqgomgkv7tp',
      //   w: 1000,
      //   h: 200,
      //   x: 0,
      //   y: 300,
      //   children: [{
      //     id: '21',
      //     w: 200,
      //     h: 100,
      //     x: 200,
      //     y: 20
      //   }]
      // }, {
      //   id: '3',
      //   uniqueKey: '1590753224242oqgomgkv7tpssss',
      //   w: 1000,
      //   h: 200,
      //   x: 0,
      //   y: 600,
      //   children: [{
      //     id: '31',
      //     w: 200,
      //     h: 100,
      //     x: 200,
      //     y: 20
      //   }]
      // }]
      arr:[],
      arr1: [
        {
          id: "",
          uniqueKey: "16797120367850",
          notes: "单选题",
          order: "1",
          oldOrder: "1",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367970",
              uniqueKey: "16797120367850",
              order: "1",
              w: 1066,
              h: 89,
              x: 0,
              y: 347,
              children: [
                {
                  id: "167971203679716797120367850",
                  uniqueKey: "16797120367850",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框1",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "16797120367971",
          notes: "单选题",
          order: "2",
          oldOrder: "2",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367970",
              uniqueKey: "16797120367971",
              order: "2",
              w: 1066,
              h: 90,
              x: 0,
              y: 442,
              children: [
                {
                  id: "167971203679716797120367971",
                  uniqueKey: "16797120367971",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框2",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "16797120367972",
          notes: "单选题",
          order: "3",
          oldOrder: "3",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367980",
              uniqueKey: "16797120367972",
              order: "3",
              w: 1066,
              h: 153,
              x: 0,
              y: 538,
              children: [
                {
                  id: "167971203679816797120367972",
                  uniqueKey: "16797120367972",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框3",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "16797120367983",
          notes: "单选题",
          order: "4",
          oldOrder: "4",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367980",
              uniqueKey: "16797120367983",
              order: "4",
              w: 1066,
              h: 217,
              x: 0,
              y: 698,
              children: [
                {
                  id: "167971203679816797120367983",
                  uniqueKey: "16797120367983",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框4",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "16797120367984",
          notes: "单选题",
          order: "5",
          oldOrder: "5",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367980",
              uniqueKey: "16797120367984",
              order: "5",
              w: 1066,
              h: 185,
              x: 0,
              y: 921,
              children: [
                {
                  id: "167971203679816797120367984",
                  uniqueKey: "16797120367984",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框5",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "16797120367985",
          notes: "单选题",
          order: "6",
          oldOrder: "6",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367980",
              uniqueKey: "16797120367985",
              order: "6",
              w: 1066,
              h: 392,
              x: 0,
              y: 1113,
              children: [
                {
                  id: "167971203679816797120367985",
                  uniqueKey: "16797120367985",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框6",
                },
              ],
            },
            {
              id: "16797120367981",
              uniqueKey: "16797120367985",
              order: "6",
              w: 1066,
              h: 406,
              x: 0,
              y: 1513,
              children: [],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "16797120367986",
          notes: "单选题",
          order: "7",
          oldOrder: "7",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367980",
              uniqueKey: "16797120367986",
              order: "7",
              w: 1066,
              h: 150,
              x: 0,
              y: 1926,
              children: [
                {
                  id: "167971203679816797120367986",
                  uniqueKey: "16797120367986",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框7",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "16797120367987",
          notes: "单选题",
          order: "8",
          oldOrder: "8",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367980",
              uniqueKey: "16797120367987",
              order: "8",
              w: 1066,
              h: 187,
              x: 0,
              y: 2082,
              children: [
                {
                  id: "167971203679816797120367987",
                  uniqueKey: "16797120367987",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框8",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "16797120367988",
          notes: "单选题",
          order: "9",
          oldOrder: "9",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367990",
              uniqueKey: "16797120367988",
              order: "9",
              w: 1066,
              h: 153,
              x: 0,
              y: 2276,
              children: [
                {
                  id: "167971203679916797120367988",
                  uniqueKey: "16797120367988",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框9",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "16797120367999",
          notes: "单选题",
          order: "10",
          oldOrder: "10",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367990",
              uniqueKey: "16797120367999",
              order: "10",
              w: 1066,
              h: 580,
              x: 0,
              y: 2436,
              children: [
                {
                  id: "167971203679916797120367999",
                  uniqueKey: "16797120367999",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框10",
                },
              ],
            },
            {
              id: "16797120367991",
              uniqueKey: "16797120367999",
              order: "10",
              w: 1066,
              h: 603,
              x: 0,
              y: 3024,
              children: [],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "167971203679910",
          notes: "单选题",
          order: "1",
          oldOrder: "1",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367990",
              uniqueKey: "167971203679910",
              order: "1",
              w: 1066,
              h: 151,
              x: 0,
              y: 3634,
              children: [
                {
                  id: "1679712036799167971203679910",
                  uniqueKey: "167971203679910",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框1",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "167971203679911",
          notes: "单选题",
          order: "2",
          oldOrder: "2",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367990",
              uniqueKey: "167971203679911",
              order: "2",
              w: 1066,
              h: 121,
              x: 0,
              y: 3791,
              children: [
                {
                  id: "1679712036799167971203679911",
                  uniqueKey: "167971203679911",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框2",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "167971203679912",
          notes: "单选题",
          order: "3",
          oldOrder: "3",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367990",
              uniqueKey: "167971203679912",
              order: "3",
              w: 1066,
              h: 220,
              x: 0,
              y: 3918,
              children: [
                {
                  id: "1679712036799167971203679912",
                  uniqueKey: "167971203679912",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框3",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "167971203679913",
          notes: "单选题",
          order: "4",
          oldOrder: "4",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367990",
              uniqueKey: "167971203679913",
              order: "4",
              w: 1066,
              h: 119,
              x: 0,
              y: 4144,
              children: [
                {
                  id: "1679712036799167971203679913",
                  uniqueKey: "167971203679913",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框4",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "167971203679914",
          notes: "单选题",
          order: "5",
          oldOrder: "5",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367990",
              uniqueKey: "167971203679914",
              order: "5",
              w: 1066,
              h: 257,
              x: 0,
              y: 4270,
              children: [
                {
                  id: "1679712036799167971203679914",
                  uniqueKey: "167971203679914",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框5",
                },
              ],
            },
            {
              id: "16797120367991",
              uniqueKey: "167971203679914",
              order: "5",
              w: 1066,
              h: 205,
              x: 0,
              y: 4535,
              children: [],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "167971203679915",
          notes: "单选题",
          order: "6",
          oldOrder: "6",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367990",
              uniqueKey: "167971203679915",
              order: "6",
              w: 1066,
              h: 598,
              x: 0,
              y: 4746,
              children: [
                {
                  id: "1679712036799167971203679915",
                  uniqueKey: "167971203679915",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框6",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "167971203679916",
          notes: "单选题",
          order: "1",
          oldOrder: "1",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120367990",
              uniqueKey: "167971203679916",
              order: "1",
              w: 1066,
              h: 248,
              x: 0,
              y: 5351,
              children: [
                {
                  id: "1679712036799167971203679916",
                  uniqueKey: "167971203679916",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框1",
                },
              ],
            },
          ],
        },
        {
          id: "",
          uniqueKey: "167971203679917",
          notes: "单选题",
          order: "2",
          oldOrder: "2",
          type: 1,
          oldType: 1,
          typeName: "单选题",
          highLight: false,
          list: [
            {
              value: 1,
              label: "A",
              checked: true,
            },
            {
              value: 2,
              label: "B",
              checked: false,
            },
            {
              value: 3,
              label: "C",
              checked: false,
            },
            {
              value: 4,
              label: "D",
              checked: false,
            },
          ],
          listLength: 4,
          listMinLength: 2,
          listMaxLength: 8,
          answer: "",
          reelArea: [
            {
              id: "16797120368090",
              uniqueKey: "167971203679917",
              order: "2",
              w: 1066,
              h: 433,
              x: 0,
              y: 5605,
              children: [
                {
                  id: "1679712036809167971203679917",
                  uniqueKey: "167971203679917",
                  w: 150,
                  h: 50,
                  x: 850,
                  y: 0,
                  customClass: "answer",
                  text: "作答框2",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 辅助线回调事件
    getRefLineParams(params) {
      const { vLine, hLine } = params;
      let id = 0;
      this.vLine = vLine.map((item) => {
        item["id"] = ++id;
        return item;
      });
      this.hLine = hLine.map((item) => {
        item["id"] = ++id;
        return item;
      });
    },
    log() {
      console.log(this.arr);
    },
    eleDragged(data) {
      console.log(data);
    },
  },
  mounted(){
    this.arr = this.arr1.map(item=>{
      return item.reelArea;
    }).flat()
    this.arr = [...this.arr,...this.arr,...this.arr]
    console.log(this.arr)
  }
};
</script>

<style>
.test1 {
  background-color: rgb(239, 154, 154);
}
.test2 {
  background-color: rgb(129, 212, 250);
}
.test3 {
  background-color: rgb(174, 213, 129);
}
</style>
