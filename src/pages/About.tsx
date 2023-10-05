
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import salesperson1 from "../assets/images/salesperson1.jpg";
import salesperson2 from "../assets/images/salesperson2.jpg";
import salesperson3 from "../assets/images/salesperson3.jpg";
import salesperson4 from "../assets/images/salesperson4.jpg";
import salesperson5 from "../assets/images/salesperson5.jpg";
import salesperson6 from "../assets/images/salesperson6.jpg"


const defaultTheme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color= "pink"
              gutterBottom
            >
              Meet Our Team!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Not to toot our own horn but, rumor has it our team consists of some of the best around.  We've been helping customers obtain their perfect vehicle for decades.  Whether your shopping for your dream car, something practical for the family, or something affordable to get around... we've got you!
            </Typography>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image= {salesperson5}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2" >
                      Samantha
                    </Typography>
                    <Typography align="center">
                      Meet Samantha!  Samantha, has been with us for over 10 years and has been top salesman for 9 of them! 
                    </Typography>
                  </CardContent>
            
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image= {salesperson2}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Eric
                    </Typography>
                    <Typography align="center">
                      This is Eric.  Eric has also been around for 10 years and can help you find the vehicle that's right for your budget.
                    </Typography>
                  </CardContent>

                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image= {salesperson4}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Chrissy & Katie
                    </Typography>
                    <Typography align="center">
                      Meet Chrissy and Katie, our first salesperson team.  What's beeter than a great car salesperson?... 2 of them!
                    </Typography>
                  </CardContent>

                </Card>
                
              </Grid><Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image= {salesperson3}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Noah
                    </Typography>
                    <Typography align="center">
                      Let me introduce you to Noah, our luxury car specialist.  Looking for a fast car or one to show off?  He's got you.
                    </Typography>
                  </CardContent>

                </Card>
                
              </Grid><Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image= {salesperson1}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Michael
                    </Typography>
                    <Typography align="center">
                      Here's Michael - as you can see he is always on the go, helping his customers find the PERFECT vehicle for their situation.
                    </Typography>
                  </CardContent>

                </Card>
                
              </Grid><Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image= {salesperson6}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                     Erica
                    </Typography>
                    <Typography align="center">
                      Meet Erica, our newest salesperson.  Don't let that fool you, however, she's already breaking records!
                    </Typography>
                  </CardContent>

                </Card>
                
              </Grid>
            {/* ))} */}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Stop in today to let our team help you locate the perfect vehicle for you!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}







// export default About