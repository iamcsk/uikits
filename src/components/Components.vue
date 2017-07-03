<template>
  <div id="Components" class="fx appContainer">
      <div class="sidebar">
        <p class="caption">Components</p>
        <div class="fh list no-border item spe">
            <div class="item-content" v-for="elem in componentsTypes" :key="elem.name">

              <router-link class="fz-m link-item" :to="elem.path">
                {{elem.name}}
              </router-link>
            </div>

        </div>
      </div>
      <q-data-table
        :data="components"
        :config="config"
        :columns="columns"
        @refresh="refresh"
      >
        <!-- Custom renderer for "message" column -->
        <template slot="col-name" scope="cell" class="textTD">
          <span class="light-paragraph">{{cell.data}}</span>
        </template>

        <template slot="col-demo" scope="cell">

          <iframe v-if="cell.data.length > 0" width="100%" height="340" :src="cell.data" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

        </template>
        <!-- Custom renderer for "source" column -->
        <template slot="col-source" scope="cell">

        </template>
        <!-- Custom renderer when user selected one or more rows -->
        <template slot="selection" scope="selection">

        </template>
      </q-data-table>
  </div>
</template>
<script>
import { Platform, Utils, Toast } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    components: 'components'
  }),
  watch: {
    '$route' (to, from) {
      // var query = '?filterId=' + this.$route.params.id
      // this.$store.dispatch('getTickets', query)
      this.$store.dispatch('getComponents', {component: this.$route.params.id + '.json'})
    },
    components (components) {
      console.log(' CSK components are here ', components)
    },
    pagination (value) {
      if (!value) {
        this.oldPagination = Utils.clone(this.config.pagination)
        this.config.pagination = false
        return
      }
      this.config.pagination = this.oldPagination
    },
    rowHeight (value) {
      this.config.rowHeight = value + 'px'
    },
    bodyHeight (value) {
      let style = {}
      if (this.bodyHeightProp !== 'auto') {
        style[this.bodyHeightProp] = value + 'px'
      }
      this.config.bodyStyle = style
    },
    bodyHeightProp (value) {
      let style = {}
      if (value !== 'auto') {
        style[value] = this.bodyHeight + 'px'
      }
      this.config.bodyStyle = style
    }
  },
  methods: {
    changeMessage (props) {
      props.rows.forEach(row => {
        // row.data.message = 'Quasar Framework rocks!'
      })
      Toast.create('Changed "Message" field for selected row(s).')
    },
    refresh (done) {
      this.timeout = setTimeout(() => {
        done()
      }, 5000)
    }
  },
  data: function () {
    return {
      table: [],
      config: {
        title: this.$route.params.id.toUpperCase(),
        refresh: true,
        columnPicker: true,
        leftStickyColumns: 1,
        rightStickyColumns: 2,
        bodyStyle: {
          maxHeight: Platform.is.mobile ? '50vh' : '1800px'
        },
        rowHeight: '400px',
        responsive: false,
        pagination: {
          rowsPerPage: 2,
          options: [5, 10, 15, 30, 50, 500]
        },
        noHeader: true,
        selection: 'multiple',
        messages: {
          noData: '<i>warning</i> No data available to show.',
          noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
        }
      },
      columns: [
        {
          label: 'Name',
          field: 'name',
          width: '120px',
          sort: true,
          filter: true
        },
        {
          label: 'Demo',
          field: 'demo',
          sort: true,
          filter: true,
          width: '500px'
        },
        {
          label: 'Source',
          field: 'source',
          sort: true,
          filter: true,
          width: '120px'
        }
      ],
      pagination: true,
      rowHeight: 250,
      bodyHeightProp: 'maxHeight',
      bodyHeight: 1000,
      componentsTypes: [
        {
          name: 'Dropdown',
          value: 'dropdown',
          path: '/components/dropdown'
        },
        {
          name: 'Button',
          value: 'button',
          path: '/components/button'
        },
        {
          name: 'Input',
          value: 'input',
          path: '/components/input'
        },
        {
          name: 'Navbar',
          value: 'navbar',
          path: '/components/navbar'
        },
        {
          name: 'Breadcrumbs',
          value: 'breadcrumbs',
          path: '/components/breadcrumbs'
        },
        {
          name: 'Pagination',
          value: 'pagination',
          path: '/components/pagination'
        },
        {
          name: 'Labels',
          value: 'labels',
          path: '/components/labels'
        },
        {
          name: 'Badges',
          value: 'badges',
          path: '/components/badges'
        },
        {
          name: 'Jumbotron',
          value: 'jumbotron',
          path: '/components/jumbotron'
        },
        {
          name: 'Page Header',
          value: 'pageheader',
          path: '/components/pageheader'
        },
        {
          name: 'Thumbnails',
          value: 'thumbnails',
          path: '/components/thumbnails'
        },
        {
          name: 'Alerts',
          value: 'alerts',
          path: '/components/alerts'
        },
        {
          name: 'Progressbar',
          value: 'progressbar',
          path: '/components/progressbar'
        },
        {
          name: 'List',
          value: 'list',
          path: '/components/list'
        },
        {
          name: 'Well',
          value: 'well',
          path: '/components/well'
        },
        {
          name: 'Cascader',
          value: 'cascader',
          path: '/components/cascader'
        },
        {
          name: 'Slider',
          value: 'slider',
          path: '/components/slider'
        },
        {
          name: 'Color Picker',
          value: 'colorpicker',
          path: '/components/colorpicker'
        },
        {
          name: 'Daterange Picker',
          value: 'daterangepicker',
          path: '/components/daterangepicker'
        },
        {
          name: 'Datetime Picker',
          value: 'datetimepicker',
          path: '/components/datetimepicker'
        },
        {
          name: 'Date Picker',
          value: 'datepicker',
          path: '/components/datepicker'
        },
        {
          name: 'Time Picker',
          value: 'datepicker',
          path: '/components/datepicker'
        },
        {
          name: 'Switch',
          value: 'switch',
          path: '/components/switch'
        },
        {
          name: 'Select',
          value: 'select',
          path: '/components/select'
        },
        {
          name: 'Dropdown',
          value: 'dropdown',
          path: '/components/dropdown'
        },
        {
          name: 'Rate',
          value: 'rate',
          path: '/components/rate'
        },
        {
          name: 'Form',
          value: 'form',
          path: '/components/form'
        },
        {
          name: 'Datatable',
          value: 'datatable',
          path: '/components/datatable'
        },
        {
          name: 'Tags',
          value: 'tags',
          path: '/components/tags'
        },
        {
          name: 'Tree',
          value: 'tree',
          path: '/components/tree'
        },
        {
          name: 'Pagination',
          value: 'pagination',
          path: '/components/pagination'
        },
        {
          name: 'Badges',
          value: 'badges',
          path: '/components/badges'
        },
        {
          name: 'Loading',
          value: 'loading',
          path: '/components/loading'
        },
        {
          name: 'Message',
          value: 'message',
          path: '/components/message'
        },
        {
          name: 'MessageBox',
          value: 'messagebox',
          path: '/components/messagebox'
        },
        {
          name: 'Notification',
          value: 'notification',
          path: '/components/notification'
        },
        {
          name: 'Tabs',
          value: 'tabs',
          path: '/components/tabs'
        },
        {
          name: 'Dialog',
          value: 'dialog',
          path: '/components/dialog'
        },
        {
          name: 'Tooltip',
          value: 'tooltip',
          path: '/components/tooltip'
        },
        {
          name: 'Popover',
          value: 'popover',
          path: '/components/popover'
        },
        {
          name: 'Card',
          value: 'card',
          path: '/components/card'
        },
        {
          name: 'Carousel',
          value: 'carousel',
          path: '/components/carousel'
        },
        {
          name: 'Collapse',
          value: 'collapse',
          path: '/components/collapse'
        }
      ]
    }
  }
}
</script>
