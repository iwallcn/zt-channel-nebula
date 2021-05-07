<template>
  <div class="">
    <div class="g-search">
      <a-form class="g-form">
        <a-row :gutter="[16, 0]">
          <a-col :span="6">
            <a-form-item label="签约服务商代码">
              <a-input></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="签约服务商名称">
              <a-input></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="签约服务商类型">
              <a-select>
                <a-select-option value="jack">
                  Jack (100)
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="advanced">
            <a-col :span="6">
              <a-form-item label="签约主体">
                <a-select>
                  <a-select-option value="jack">
                    Jack (100)
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="状态">
                <a-select>
                  <a-select-option value="jack">
                    Jack (100)
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="审核状态">
                <a-select>
                  <a-select-option value="jack">
                    Jack (100)
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="内部联系人">
                <a-select>
                  <a-select-option value="jack">
                    Jack (100)
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col :span="6" class="g-btn-more">
            <a-form-item label=" ">
              <a-button type="primary">查询</a-button>
              <a-button>重置</a-button>
              <a @click="advanced = !advanced">
                {{ advanced ? '收起' : '展开' }}
                <a-icon :type="advanced ? 'up' : 'down'" />
              </a>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <div class="g-list">
      <div class="g-btns">
        <a-button type="primary">新增</a-button>
        <a-button>修改</a-button>
        <a-button>提交审核</a-button>
        <a-button>启用</a-button>
        <a-button type="danger">禁用</a-button>
        <a-button>日志</a-button>
      </div>

      <a-table
        :row-selection="rowSelection"
        :columns="columns"
        :data-source="data"
      >
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
export default {
  name: 'SignManage',
  components: {},
  data() {
    return {
      advanced: false, // 高级搜索 展开/关闭
      data,
      columns
    }
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
          )
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name
          }
        })
      }
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped></style>
