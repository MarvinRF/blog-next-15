import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();
  const postsToInsert = posts.map(post => ({
    ...post,
    coverImgUrl: post.coverImageUrl ?? '',
  }));

  try {
    await drizzleDb.delete(postsTable); // ISSO LIMPA A BASE DE DADOS
    await drizzleDb.insert(postsTable).values(postsToInsert);

    console.log();
    console.log(`${posts.length} posts foram salvos na base de dados.`);
    console.log();
  } catch (e) {
    console.log();
    console.log('Ocorreu um erro...');
    console.log();
    console.log(e);
    console.log();
  }
})();
