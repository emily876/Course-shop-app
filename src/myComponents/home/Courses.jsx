import { Typography, Box, makeStyles, Card, CardMedia, CardActionArea, Button, CardContent, CardActions, Divider } from '@material-ui/core'
import React from 'react';

const useStyle = makeStyles(theme=>({
    root: {
        maxWidth: 300,
        margin:80,
    },
    media: {
        height: 140,
    },
    component: {
        marginTop:10,
        background: '#ffffff'
    },
    prime: {
        fontSize: 30,
        fontWeight: 600,
        lineHeight: '32px',
        textAlign:'center',
        paddingTop:40,
        color:'#fb641b',
        textDecoration:'underline',
        textDecorationStyle:'double'
    },
    flex:{
        padding:20, 
        display:'flex',
        marginTop:-40,
        marginLeft:40,
        [theme.breakpoints.down('sm')]:{
            marginLeft:-10,
            display:'flex',
            flexDirection:'column',
        }
    }
}));

const Courses = () => {
    const classes = useStyle();

    return (
        <Box id="courselist" style={{ background: '#f2f2f2' }}>
            <Box className={classes.component}>
                <Typography className={classes.prime}>Prime Courses</Typography>
                <Box className={classes.flex}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://www.blockchain101.org/wp-content/uploads/2016/01/Cryptocurrency-Course.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    BlockChain basics
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Blockchain technology is growing in use and it's essential to understand its core business uses and benefits. 
                                The courses are designed to help both technical and nontechnical audiences learn the key concepts behind 
                                hyperledger and blockchain, making clear the various enterprise applications.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <span style={{paddingRight:30}}>
                            <Button size="large" color="primary">
                            <a href="/Course1" style={{textDecoration:'none'}}>Learn More</a>
                            </Button></span>
                            <Button size="large" color="secondary">
                            <a href="/Course1" style={{textDecoration:'none',color:'#e75480'}}>Buy Now</a>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://miro.medium.com/max/1400/1*mtsk3fQ_BRemFidhkel3dA.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Git and Github
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    GitHub Ultimate: Master Git and GitHub - Beginner to Expert.Learn the key concepts of the Git source control system
                                    Step through the entire Git workflow
                                    Compare the different states in Git
                                    Manage files inside and outside the control of Git and GitHub
                                    Create and manage repositories on GitHub
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <span style={{paddingRight:30}}>
                            <Button size="large" color="primary">
                            <a href="/Course2" style={{textDecoration:'none'}}>Learn More</a>
                            </Button></span>
                            <Button size="large" color="secondary">
                            <a href="/Course2" style={{textDecoration:'none',color:'#e75480'}}>Buy Now</a>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://i.ytimg.com/vi/jhXCTbFnK8o/maxresdefault.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Cryptography Course
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Cryptography is an indispensable tool for protecting information in computer systems. 
                                In this course you will learn the inner workings of cryptographic systems and how 
                                to correctly use them in real-world applications.Cryptography is an indispensable tool for 
                                protecting information in computer systems.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <span style={{paddingRight:30}}>
                            <Button size="large" color="primary">
                            <a href="/Course3" style={{textDecoration:'none'}}>Learn More</a>
                            </Button></span>
                            <Button size="large" color="secondary">
                            <a href="/Course3" style={{textDecoration:'none',color:'#e75480'}}>Buy Now</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
                <Divider />

                <Box className={classes.flex}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://1.bp.blogspot.com/-TMtHnVZWzDw/X-Los-yfcCI/AAAAAAAAlGg/ixm2SNBo9YEJJTnOpR4SYlxpWegxQp_dwCLcBGAsYHQ/w1200-h630-p-k-no-nu/LEarn%2BSpring%2BSecurity%2Band%2BOAth%2Bby%2BBaeldung%2B-%2Bbest%2Bonline%2Bcourse.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Spring framework
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Spring Framework Master Class - Java Spring the Modern Way.Learn the magic of Java 
                                Spring Framework with Spring Boot, Spring JDBC, Spring AOP, Hibernate, JUnit & Mockito
                                You will learn the BASICS of Spring - Dependency Injection, IOC Container, Application Context and Bean Factory
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <span style={{paddingRight:30}}>
                            <Button size="large" color="primary">
                            <a href="/Course4" style={{textDecoration:'none'}}>Learn More</a>
                            </Button></span>
                            <Button size="large" color="secondary">
                            <a href="/Course4" style={{textDecoration:'none',color:'#e75480'}}>Buy Now</a>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://freecoursesite.pro/wp-content/uploads/2020/11/docker-mastery-with-kubernetes-swarm-from-a-docker-captain-2020_5fb6c6a27c901.jpeg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Docker Course
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Docker Mastery: with Kubernetes +Swarm from a Docker Captain.
                                Build, test, deploy containers with the best mega-course on Docker, Kubernetes
                                Gain the skills to build development environments with your code running in containers.
                                Docker is a popular open-source containerization platform for software development.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <span style={{paddingRight:30}}>
                            <Button size="large" color="primary">
                            <a href="/Course5" style={{textDecoration:'none'}}>Learn More</a>
                            </Button></span>
                            <Button size="large" color="secondary">
                            <a href="/Course5" style={{textDecoration:'none',color:'#e75480'}}>Buy Now</a>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="http://www.clickode.com/wp-content/uploads/2016/02/deep-learning.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Deep Learning
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Data Science: Deep Learning and Neural Networks in Python
                                The MOST in-depth look at neural network theory, and how to code one with pure Python and Tensorflow
                                Learn how a neural network is built from basic building blocks (the neuron)
                                Code a neural network from scratch in Python and numpy
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <span style={{paddingRight:30}}>
                            <Button size="large" color="primary">
                            <a href="/Course6" style={{textDecoration:'none'}}>Learn More</a>
                            </Button></span>
                            <Button size="large" color="secondary">
                            <a href="/Course6" style={{textDecoration:'none',color:'#e75480'}}>Buy Now</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
                    <Divider />
                <Box className={classes.flex}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://www.qtreetechnologies.in/images/linux-training.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Linux basics
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Linux Mastery: Master the Linux Command Line in 11.5 Hours
                                Learn the Linux Command Line from Scratch and Improve your Career with 
                                the World's Most Fun Project-Based Linux Course!Learn how to Search for, Customise, 
                                Install and Manage Open Source Software with Package Managers!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <span style={{paddingRight:30}}>
                            <Button size="large" color="primary">
                            <a href="/Course7" style={{textDecoration:'none'}}>Learn More</a>
                            </Button></span>
                            <Button size="large" color="secondary">
                            <a href="/Course7" style={{textDecoration:'none',color:'#e75480'}}>Buy Now</a>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://www.wpbeginner.com/wp-content/uploads/2019/07/createonlinecoursewp.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                   WordPress
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                The Complete WordPress Website Business Course
                                Master WordPress with this Complete WordPress Course, without learning how 
                                to code and without any programming!Master the inner workings of WordPress and building websites
                                Create all kinds of commercial websites, using WordPress, to sell to clients
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <span style={{paddingRight:30}}>
                            <Button size="large" color="primary">
                            <a href="/Course8" style={{textDecoration:'none'}}>Learn More</a>
                            </Button></span>
                            <Button size="large" color="secondary">
                            <a href="/Course8" style={{textDecoration:'none',color:'#e75480'}}>Buy Now</a>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://d3o9cyokn8bkvv.cloudfront.net/wp-content/uploads/2021/03/Software-development-Life-Cycle.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Software Development
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Software Development: Better Requirements Gathering Skills
                                Boost Your Software Requirements Gathering Skills Today! Learn The Techniques That Work!
                                Effectively manage the requirements gathering process
                                Handle 'Single Interviews', 'Group Interviews' and 'Focus Groups'.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <span style={{paddingRight:30}}>
                            <Button size="large" color="primary">
                            <a href="/Course9" style={{textDecoration:'none'}}>Learn More</a>
                            </Button></span>
                            <Button size="large" color="secondary">
                            <a href="/Course9" style={{textDecoration:'none',color:'#e75480'}}>Buy Now</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Box>

            </Box>
        </Box>
    )
}

export default Courses;
