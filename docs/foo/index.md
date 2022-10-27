


{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>

<script setup>
import { useData, useRoute, useRouter } from 'vitepress'

const { page, theme } = useData()

const { path, data, component } = useRoute()

const { route, go } = useRouter()
</script>
### path
<pre>{{ path }}</pre>
### data
<pre>{{ data }}</pre>
### component
<pre>{{ component }}</pre>
### route
<pre>{{ route }}</pre>
### go
<pre>{{ go }}</pre>

<ComponentInHeader />


::: v-pre
`<ComponentInHeader />`
:::


