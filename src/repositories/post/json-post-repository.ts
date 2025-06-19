import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

const SIMULATE_WAIT_IN_MS = 2000;

export class JsonPostRepository implements PostRepository {
  private async wait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonFile = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJsonFile = JSON.parse(jsonFile);
    const { posts } = parsedJsonFile;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.wait();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await this.wait();
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);
    if (!post) throw new Error('Post not found');
    return post;
  }
}
