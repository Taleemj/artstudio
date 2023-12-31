import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "project name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "project description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "project",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
