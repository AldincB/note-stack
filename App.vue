<template>
  <div :class="[$store.state.theme]" class="min-h-screen p-4">
    <header class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Note Stack</h1>
      <button @click="toggleTheme" class="bg-gray-200 dark:bg-gray-700 p-2 rounded">
        {{ isDark ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </header>

    <div class="flex space-x-4">
      <aside class="w-1/4">
        <input v-model="newFolder" @keyup.enter="addFolder" placeholder="New folder" class="w-full p-2 mb-2 rounded border"/>
        <ul>
          <li v-for="folder in folders" :key="folder" @click="selectFolder(folder)" class="cursor-pointer hover:underline">
            {{ folder }}
          </li>
        </ul>
        <div class="mt-4">
          <label class="block">Tag:</label>
          <input v-model="tagFilter" placeholder="Filter by tag" class="w-full p-2 rounded border"/>
        </div>
      </aside>

      <main class="flex-1">
        <div class="mb-4">
          <input v-model="title" placeholder="Note title" class="w-full p-2 text-xl font-semibold border rounded mb-2"/>
          <textarea id="editor"></textarea>
          <button @click="saveNote" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </div>

        <div>
          <h2 class="text-xl font-bold mb-2">Notes</h2>
          <div v-for="note in filteredNotes" :key="note.id" class="border p-2 rounded mb-2">
            <h3 class="font-bold">{{ note.title }}</h3>
            <div class="text-sm text-gray-600">Tags: {{ note.tags.join(', ') }}</div>
            <div v-html="note.content" class="mt-2"></div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
