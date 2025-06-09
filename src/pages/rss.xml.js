import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_CONTENT } from "@/consts";

export async function GETAgendaES(context) {
  const posts = await getCollection("agendaES");
  return rss({
    title: SITE_CONTENT.es.TITLE, // Access title for Spanish
    description: SITE_CONTENT.es.DESCRIPTION, // Access description for Spanish
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/agenda/${post.id}/`,
    })),
  });
}

export async function GETAgendaEN(context) {
  const posts = await getCollection("agendaEN");
  return rss({
    title: SITE_CONTENT.en.TITLE, // Access title for English
    description: SITE_CONTENT.en.DESCRIPTION, // Access description for English
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/agenda/${post.id}/`,
    })),
  });
}

export async function GETAgendaVA(context) {
  const posts = await getCollection("agendaVA");
  return rss({
    title: SITE_CONTENT.ca.TITLE, // Access title for Valencian
    description: SITE_CONTENT.ca.DESCRIPTION, // Access description for Valencian
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/agenda/${post.id}/`,
    })),
  });
}

export async function GETRecursosES(context) {
  const posts = await getCollection("recursosES");
  return rss({
    title: SITE_CONTENT.es.TITLE, // Access title for Spanish
    description: SITE_CONTENT.es.DESCRIPTION, // Access description for Spanish
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/recursos/${post.id}/`,
    })),
  });
}

export async function GETRecursosEN(context) {
  const posts = await getCollection("recursosEN");
  return rss({
    title: SITE_CONTENT.en.TITLE, // Access title for English
    description: SITE_CONTENT.en.DESCRIPTION, // Access description for English
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/recursos/${post.id}/`,
    })),
  });
}

export async function GETRecursosVA(context) {
  const posts = await getCollection("recursosVA");
  return rss({
    title: SITE_CONTENT.ca.TITLE, // Access title for Valencian
    description: SITE_CONTENT.ca.DESCRIPTION, // Access description for Valencian
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/recursos/${post.id}/`,
    })),
  });
}
