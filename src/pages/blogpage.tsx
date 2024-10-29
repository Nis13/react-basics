import { Box, Card, CardContent, Typography } from "@mui/material";
import { useBlogApi } from "../hooks/blogapi";

interface IPost {
  title: string;
  body: string;
  id: string;
}

const Blogpage = () => {
  const { isLoading, data, error } = useBlogApi();

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Data not found.</div>;

  if (error) return <div>Error</div>;
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {data.map((post: IPost) => {
        return (
          <Card
            sx={{ width: "220px", backgroundColor: "primary" }}
            key={post.id}
          >
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                {post.title}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                {post.body}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default Blogpage;
