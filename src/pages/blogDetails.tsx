import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      setPost(data);
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center py-20">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (!post)
    return (
      <div className="text-center py-20 text-muted-foreground">
        Blog not found
      </div>
    );

  return (
<main className="min-h-screen container mx-auto px-4 pt-28 pb-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {post.image_url && (
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-64 object-cover rounded-2xl mb-8"
          />
        )}

        <h1 className="text-3xl md:text-4xl font-display mb-4">
          {post.title}
        </h1>

        <p className="text-sm text-muted-foreground mb-8">
          {new Date(post.created_at).toLocaleDateString()}
        </p>

        <div className="text-lg leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </motion.div>
    </main>
  );
};

export default BlogDetails;